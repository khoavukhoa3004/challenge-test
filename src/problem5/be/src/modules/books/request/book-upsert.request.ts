import { Expose } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";


export class BookUpsertRequest {

  @Expose()
  @IsString()
  title: string;


  @Expose()
  @IsString()
  author: string;

  @Expose()
  @IsNumber()
  categoryId: number;

  @Expose()
  @IsNumber()
  price: number;
}
