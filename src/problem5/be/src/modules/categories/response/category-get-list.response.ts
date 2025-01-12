import { Prisma } from "@prisma/client";

export class CategoryGetListResponse {
  id: number;
  name: string;

  static fromEntities(
    lst: Prisma.CategoryGetPayload<{}>[]
  ): CategoryGetListResponse[] {
    return lst.reduce<CategoryGetListResponse[]>((acc, e) => {
      acc.push({
        id: e.id,
        name: e.name,
      });
      return acc;
    }, []);
  }
}
