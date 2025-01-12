import { BookGetListRequest } from "../request/book-get-list.request";
import {
  TypedRequestQuery,
  TypedRequestBody,
  TypedRequestParams,
  TypedRequestBodyParams,
} from "@utils/base.request";
import { TypedResponse } from "@utils/base.response";
import { BookUpsertRequest } from "../request/book-upsert.request";
import * as BookService from "../services";
import { BookGetListResponse } from "../response/book-get-list.response";
import { BookGetDetailResponse } from "../response/book-get-detail.response";
import { NextFunction } from "express";

export const getBooks = async (
  req: TypedRequestQuery<BookGetListRequest>,
  res: TypedResponse<BookGetListResponse[]>
): Promise<void> => {
  const bookQuery = req.query;
  console.log('bppl: ', bookQuery);
  const books = await BookService.getAllBooks(bookQuery);
  res.status(200).json(books);
};

export const createBook = async (
  req: TypedRequestBody<BookUpsertRequest>,
  res: TypedResponse<any>
) => {
  const newBook = await BookService.createBook(req.body);
  res.status(201).json(newBook);
};

export const getBook = async (
  req: TypedRequestParams<{ id: string }>,
  res: TypedResponse<BookGetDetailResponse>,
  next: NextFunction
) => {
  try {
    const bookId = req.params.id;
    const book = await BookService.getBook(bookId);
    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};

export const updateBook = async (
  req: TypedRequestBodyParams<{ id: string }, BookUpsertRequest>,
  res: TypedResponse<any>,
  next: NextFunction
) => {
  try {
    const bookId = req.params.id;
    await BookService.updateBook(bookId, req.body);
    res.status(200).json(await BookService.updateBook(bookId, req.body));
  } catch (e) {
    next(e); 
  }
};

export const deleteBook = async (
  req: TypedRequestParams<{ id: string }>,
  res: TypedResponse<null>,
  next: NextFunction
) => {
  try {
    await BookService.deleteBook(req.params.id);
    res.status(200).json();
  } catch (e) {
    next(e);
  }
};
