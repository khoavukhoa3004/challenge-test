import { prisma } from "@services/prisma";
import { NotFoundException } from "@middlewares/exception";
import { BookGetListRequest } from "../request/book-get-list.request";
import { BookGetListResponse } from "../response/book-get-list.response";
import { BookGetDetailResponse } from "../response/book-get-detail.response";
import { BookUpsertRequest } from "../request/book-upsert.request";
import { ErrorCode } from "@utils/error.enum";

export const getAllBooks = async (
  query: BookGetListRequest
): Promise<BookGetListResponse[]> => {
  const books = await prisma.book.findMany({
    where: {
      OR: [
        { title: { contains: query.keyword || "", mode: "insensitive" } },
        { author: { contains: query.keyword || "", mode: "insensitive" } },
        { ...(query.category && { categoryId: Number(query.category) }) },
      ],
      price: query.price ? Number(query.price) : undefined,
    },
    include: { category: true },
  });
  return BookGetListResponse.fromEntities(books);
};

export const getBook = async (id: string) => {
  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
    include: { category: true },
  });
  if (!book) {
    throw new NotFoundException(ErrorCode.BOOK_NOT_FOUND);
  }
  return BookGetDetailResponse.fromEntity(book);
};

export const createBook = async (book: BookUpsertRequest) => {
  const newBook = await prisma.book.create({
    data: {
      title: book.title,
      author: book.author,
      categoryId: book.categoryId,
      price: book.price,
    }  
  });
  return newBook;
};

export const updateBook = async (id: string, book: BookUpsertRequest) => {
  const bookExist = await prisma.book.findUnique({ where: { id: Number(id) } });
  if (!bookExist) {
    throw new NotFoundException(ErrorCode.BOOK_NOT_FOUND);
  }
  const changedBook = await prisma.book.update({
    where: { id: Number(id) },
    data: {
      title: book.title,
      author: book.author,
      category: { connect: { id: book.categoryId } },
      price: book.price,
    }
  })
  return changedBook;
};

export const deleteBook = async (id: string) => {
  const existingBook = await prisma.book.findUnique({ where: { id: Number(id) } });
  if (!existingBook) {
    throw new NotFoundException(ErrorCode.BOOK_NOT_FOUND);
  }
  await prisma.book.delete({ where: { id: Number(id) } });
};
