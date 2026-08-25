import services from "@/data/services";
import { Service } from "@/types";

/**
 * Service Repository (Static Implementation)
 * This replaces the MongoDB-dependent repository to allow decoupling.
 * In the future, this should be replaced by an API client calling the CMS.
 */

/**
 * The service list is flat. There used to be a `parent_service` field and a
 * `getSubServicesByParentId` reader for a parent/child hierarchy, but every
 * service had `parent_service: null` and nothing ever called the reader, so the
 * whole hierarchy was filter noise. If nesting is ever needed, add it back
 * together with a UI that renders it.
 */
export async function getRootServices(): Promise<Service[]> {
  return services.filter((s) => s.active !== false);
}

export async function getServiceLinks(): Promise<Partial<Service>[]> {
  return services
    .filter((s) => s.active !== false)
    .map((s) => ({
      title: s.title,
      pragma_link: s.pragma_link,
      card: s.card,
    }));
}

export async function getServiceByPragmaLink(
  pragmaLink: string
): Promise<Service | null> {
  return services.find((s) => s.pragma_link === pragmaLink) || null;
}

export async function getAllServices(): Promise<Service[]> {
  return services.filter((s) => s.active !== false);
}
