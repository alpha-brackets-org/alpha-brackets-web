import { unstable_cache as cache } from "next/cache";
import * as servicesRepo from "@/lib/repos/service-repo";
import { Service } from "@/types";

// Cached getters
export const getServiceLinksCached = cache(
  async (): Promise<Partial<Service>[]> => {
    return servicesRepo.getServiceLinks();
  },
  ["service-links"],
  { tags: ["service-links"], revalidate: 300 }
);

// Cached service by pragma link. Key includes the pragmaLink.
export async function getServiceByPragmaLinkCached(
  pragmaLink: string
): Promise<Service | null> {
  const getter = cache(
    async (id: string) => servicesRepo.getServiceByPragmaLink(id),
    ["service-by-link", pragmaLink],
    { tags: ["service-by-link", `service:${pragmaLink}`], revalidate: 300 }
  );
  return getter(pragmaLink);
}

// Cached sub services by parent id. Key includes the parentServiceId.
export async function getSubServicesByParentIdCached(
  parentServiceId: string
): Promise<Service[]> {
  const getter = cache(
    async (id: string) => servicesRepo.getSubServicesByParentId(id),
    ["sub-services-by-parent", parentServiceId],
    {
      tags: ["sub-services-by-parent", `service:${parentServiceId}`],
      revalidate: 300,
    }
  );
  return getter(parentServiceId);
}
