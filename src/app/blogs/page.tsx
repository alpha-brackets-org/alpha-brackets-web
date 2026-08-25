import { notFound } from "next/navigation";

// Route intentionally disabled: no blog content is live yet, so it 404s.
// No `metadata` export on purpose. Next discards metadata for a route that calls
// notFound(), so exporting a real title here only makes the route look live to the
// next person reading it. Every disabled route in this app follows this pattern.
// Add metadata back at the same time as the content.

export default function Home() {
  notFound();
}
