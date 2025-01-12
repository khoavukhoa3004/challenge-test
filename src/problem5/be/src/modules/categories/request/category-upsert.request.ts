import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class CategoryCreateRequest {
  @Expose()
  @IsString()
  name: string;
}
