import { prisma } from "@services/prisma";
import { ErrorCode } from "@utils/error.enum";
import { NotFoundException } from "@middlewares/exception";
import { CategoryGetListResponse } from "../response/category-get-list.response";

export const getAllCategories = async (): Promise<
  CategoryGetListResponse[]
> => {
  const categories = await prisma.category.findMany({});
  return CategoryGetListResponse.fromEntities(categories);
};

export const getCategory = async (id: string) => {
  const category = await prisma.category.findUnique({
    where: { id: Number(id) },
  });
  if (!category) {
    throw new NotFoundException(ErrorCode.CATEGORY_NOT_FOUND);
  }
  return { id: category.id, name: category.name };
};

export const createCategory = async (name: string) => {
  const newCategory = await prisma.category.create({
    data: { name },
  });
  return newCategory;
};
