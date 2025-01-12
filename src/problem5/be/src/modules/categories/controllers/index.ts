import {
  TypedRequestQuery,
  TypedRequestBody,
  TypedRequestParams,
} from "@utils/base.request";
import { TypedResponse } from "@utils/base.response";
import * as CategoryService from "../services";
import { CategoryGetListResponse } from "../response/category-get-list.response";
import { CategoryCreateRequest } from "../request/category-upsert.request";

export const getCategories = async (
  req: TypedRequestQuery<null>,
  res: TypedResponse<CategoryGetListResponse[]>
): Promise<void> => {
  const books = await CategoryService.getAllCategories();
  res.status(200).json(books);
};

export const createCategory = async (
  req: TypedRequestBody<CategoryCreateRequest>,
  res: TypedResponse<any>
) => {
  const newCategory = await CategoryService.createCategory(req.body.name);
  res.status(201).json(newCategory);
};

export const getCategory = async (
  req: TypedRequestParams<{ id: string }>,
  res: TypedResponse<any>
) => {
  const id = req.params.id;
  const category = await CategoryService.getCategory(id);
  res.status(200).json(category);
};
