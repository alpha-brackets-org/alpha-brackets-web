import services from "@/data/services";
import { Service } from "@/types";

/**
 * Service Repository (Static Implementation)
 * This replaces the MongoDB-dependent repository to allow decoupling.
 * In the future, this should be replaced by an API client calling the CMS.
 */

export async function getRootServices(): Promise<Service[]> {
  return services.filter(
    (s) => s.parent_service === null && s.active !== false
  );
}

export async function getServiceLinks(): Promise<Partial<Service>[]> {
  return services
    .filter((s) => s.active !== false)
    .map((s) => ({
      title: s.title,
      pragma_link: s.pragma_link,
      parent_service: s.parent_service,
      card: s.card,
    }));
}

export async function getServiceByPragmaLink(
  pragmaLink: string
): Promise<Service | null> {
  return services.find((s) => s.pragma_link === pragmaLink) || null;
}

export async function getSubServicesByParentId(
  parentId: string
): Promise<Service[]> {
  return services.filter(
    (s) => s.parent_service === parentId && s.active !== false
  );
}

export async function getAllServices(): Promise<Service[]> {
  return services.filter((s) => s.active !== false);
}
