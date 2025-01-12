import { Send } from "express-serve-static-core";
import { Response } from 'express';
type Nullable<T> = T | null;


// export interface TypedResponse<ResBody> extends Response {
//   json: Send<ResBody, this>;
// }

export interface TypedResponse<ResBody> extends Response {
  json: Send<ResBody, this>;
}
