import { Request } from "express";
import { Expose } from "class-transformer";
import { IsString, IsEnum, IsOptional, IsNumber, IsNumberString } from "class-validator";

export enum BookType {}

export class BookGetListRequest {
  [key: string]: string;

  @Expose()
  @IsString()
  @IsOptional()
  keyword: string;

  @Expose()
  @IsNumberString()
  @IsOptional()
  categoryId: string;

  @Expose()
  @IsNumberString()
  @IsOptional()
  price: string;
}
