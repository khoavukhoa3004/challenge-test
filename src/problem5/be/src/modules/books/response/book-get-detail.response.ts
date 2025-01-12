import { Prisma } from "@prisma/client";

export class BookGetDetailResponse {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;

  static fromEntity(
    e: Prisma.BookGetPayload<{ include: { category: true } }>
  ): BookGetDetailResponse {
    return {
      id: e.id,
      title: e.title,
      author: e.author,
      category: e.category.name,
      price: e.price,
    };
  }
}
