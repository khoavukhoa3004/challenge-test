import { Router, Request, Response } from "express";
import * as BookController from "../controllers";
export const bookRouter = Router();


bookRouter.get("/:id", BookController.getBook);
bookRouter.put("/:id", BookController.updateBook);
bookRouter.delete("/:id", BookController.deleteBook);
bookRouter.get("/", BookController.getBooks);
bookRouter.post("/", BookController.createBook);
