/**
 * Production Lighthouse run.
 *
 * This exists because it is very easy to point Lighthouse at `next dev` and then
 * spend a day optimising numbers that are not real. A dev build ships a ~213 KB
 * devtools chunk, the hot-reload client, and unminified JavaScript, none of which
 * a visitor ever receives. Under Lighthouse's simulated throttling that inflates
 * LCP by seconds. It has already happened twice on this project.
 *
 * So: this script always builds, always serves the production output, and always
 * uses its own port so it cannot accidentally attach to a dev server someone left
 * running. Use `npm run perf`. Do not measure any other way.
 *
 * Reports land in reports/ (gitignored) and the key numbers are printed here so
 * you do not have to open them.
 */
import { spawn, spawnSync } from "node:child_process";
import { mkdirSync, readFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = 3210;
const ORIGIN = `http://localhost:${PORT}`;
const OUT_DIR = "reports";

const isWindows = process.platform === "win32";
const npx = isWindows ? "npx.cmd" : "npx";

function run(command, args, label) {
  const result = spawnSync(command, args, { stdio: "inherit", shell: isWindows });
  if (result.status !== 0) {
    throw new Error(`${label} failed with exit code ${result.status}`);
  }
}

/** Kill the whole tree. On Windows child.kill() leaves grandchildren running. */
function killTree(child) {
  if (!child || child.killed) return;
  if (isWindows) {
    spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
      stdio: "ignore",
    });
  } else {
    process.kill(-child.pid, "SIGKILL");
  }
}

/** Poll rather than sleeping a fixed interval: build machines vary wildly. */
async function waitForServer(timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(ORIGIN, { redirect: "manual" });
      if (response.status > 0) return;
    } catch {
      // Not up yet.
    }
    await sleep(500);
  }
  throw new Error(`Server did not respond on ${ORIGIN} within ${timeoutMs}ms`);
}

function audit(formFactor) {
  const base = `${OUT_DIR}/lighthouse-${formFactor}`;
  const args = [
    "lighthouse",
    ORIGIN,
    "--quiet",
    "--chrome-flags=--headless=new --no-sandbox",
    "--output=html",
    "--output=json",
    `--output-path=${base}`,
  ];
  // Lighthouse defaults to mobile emulation; --preset=desktop switches both the
  // emulation and the throttling model.
  if (formFactor === "desktop") args.push("--preset=desktop");

  run(npx, args, `Lighthouse (${formFactor})`);
  return JSON.parse(readFileSync(`${base}.report.json`, "utf8"));
}

function summarise(formFactor, report) {
  const pct = (id) => {
    const score = report.categories[id]?.score;
    return score === null || score === undefined
      ? "  n/a"
      : String(Math.round(score * 100)).padStart(5);
  };
  const metric = (id) => report.audits[id]?.displayValue ?? "n/a";

  console.log(`\n  ${formFactor.toUpperCase()}`);
  console.log(
    `    perf ${pct("performance")}   a11y ${pct("accessibility")}` +
      `   best-practices ${pct("best-practices")}   seo ${pct("seo")}`
  );
  console.log(
    `    FCP ${metric("first-contentful-paint")}   LCP ${metric(
      "largest-contentful-paint"
    )}   TBT ${metric("total-blocking-time")}   CLS ${metric(
      "cumulative-layout-shift"
    )}`
  );

  // The whole point of the script. If any of these show up we measured dev.
  const devTells = ["next-devtools", "hmr-client"];
  const requested = (report.audits["network-requests"]?.details?.items ?? [])
    .map((item) => item.url)
    .join(" ");
  const found = devTells.filter((tell) => requested.includes(tell));
  const unminified = report.audits["unminified-javascript"]?.details?.items?.length;

  if (found.length || unminified) {
    console.log(
      `    WARNING: this looks like a dev build (${
        found.join(", ") || "unminified JS"
      }). The numbers above are not real.`
    );
  }
}

let server;
try {
  mkdirSync(OUT_DIR, { recursive: true });

  console.log("\n> building production bundle");
  run(npx, ["next", "build"], "next build");

  console.log(`\n> starting production server on ${PORT}`);
  server = spawn(npx, ["next", "start", "-p", String(PORT)], {
    stdio: "ignore",
    shell: isWindows,
    detached: !isWindows,
  });
  await waitForServer();

  const results = {};
  for (const formFactor of ["mobile", "desktop"]) {
    console.log(`\n> auditing ${formFactor}`);
    results[formFactor] = audit(formFactor);
  }

  console.log("\n─── production Lighthouse ───");
  for (const [formFactor, report] of Object.entries(results)) {
    summarise(formFactor, report);
  }
  console.log(`\n  reports written to ${OUT_DIR}/\n`);
} finally {
  killTree(server);
}
