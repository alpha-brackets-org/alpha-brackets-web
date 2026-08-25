import Link from "next/link";
import { ChevronRight } from "@/declarations/icons";

export interface Crumb {
  name: string;
  /** Omit on the final crumb, which is the current page and is not a link. */
  href?: string;
}

/**
 * Visible breadcrumb trail, paired with BreadcrumbList JSON-LD on the page that
 * renders it.
 *
 * Two reasons this exists. Google's breadcrumb rich result requires the markup
 * and the visible trail to agree, so emitting schema for breadcrumbs nobody can
 * see is the kind of thing that gets a rich result ignored or flagged. And every
 * internal link on a service page used to point at /contact, so a page had no way
 * back up to /services except through the nav.
 *
 * `bread_crumbs` in services.ts is an empty array on all 12 services, so the
 * trail is derived from the route instead of read from data.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.name} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-foreground" aria-current="page">
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    className="w-3 h-3 shrink-0 opacity-50"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
