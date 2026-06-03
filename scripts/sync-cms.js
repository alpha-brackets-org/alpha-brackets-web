/* eslint-disable no-undef */
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env.local") });
dotenv.config({ path: path.join(__dirname, "../.env.production") });

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
if (!CMS_URL) {
  console.error(
    "Error: NEXT_PUBLIC_CMS_URL is not defined in environment variables."
  );
  process.exit(1);
}

const OPENAPI_URL = `${CMS_URL}/openapi.json`;
const RELATIVE_OUTPUT_FILE = "./src/types/cms.ts";

console.log(`Generating types from ${OPENAPI_URL} using openapi-typescript...`);

try {
  // Execute openapi-typescript with flags to export root types and enums automatically
  execSync(
    `npx openapi-typescript ${OPENAPI_URL} -o ${RELATIVE_OUTPUT_FILE} --enum --dedupe-enums --root-types --root-types-no-schema-prefix --root-types-keep-casing`,
    { stdio: "inherit" }
  );

  console.log(`Successfully synchronized CMS types: ${RELATIVE_OUTPUT_FILE}`);
} catch (error) {
  console.error("Failed to sync CMS:", error.message);
  process.exit(1);
}
