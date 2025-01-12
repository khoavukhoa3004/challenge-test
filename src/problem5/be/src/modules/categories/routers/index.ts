import { Router } from "express";
import * as CategoryController from "../controllers";
export const categoryRouter = Router();

categoryRouter.get("/", CategoryController.getCategories);
categoryRouter.post("/", CategoryController.createCategory);
categoryRouter.get("/:id", CategoryController.getCategory);
