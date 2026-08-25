import { notFound } from "next/navigation";

// Route intentionally disabled, like the /blogs index above it: no blog content is
// live yet, so every slug 404s.
// No metadata export on purpose. The `generateMetadata` that used to return
// `{ title: "Not Found" }` was dead code, because Next discards metadata for a
// route that calls notFound() and renders the 404 title from
// src/app/not-found.tsx instead.

export default function BlogPage() {
  notFound();
}
