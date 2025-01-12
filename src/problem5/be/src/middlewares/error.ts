import { NextFunction } from "express";
import { HttpException } from "./exception";

export const errorHandler = (
  err: Error,
  req: any,
  res: any,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({
      statusCode: err.status,
      message: err.message,
    });
  }

  // Handle generic errors
  return res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
  });
};
