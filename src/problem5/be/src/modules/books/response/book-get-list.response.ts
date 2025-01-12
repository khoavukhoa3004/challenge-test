import { Prisma } from "@prisma/client";

export class BookGetListResponse {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;

  static fromEntities(
    lst: Prisma.BookGetPayload<{ include: { category: true } }>[]
  ): BookGetListResponse[] {
    return lst.reduce<BookGetListResponse[]>((acc, e) => {
      acc.push({
        id: e.id,
        title: e.title,
        author: e.author,
        category: e.category.name,
        price: e.price,
      });
      return acc;
    }, []);
  }
}
