import { Params, ParamsDictionary, Query } from 'express-serve-static-core';
import { Request } from 'express';

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

export interface TypedRequestQuery<T extends Query> extends Request {
  query: T;
}

export interface TypedRequestParams<T extends ParamsDictionary> extends Request {
  params: T;
}

export interface TypedRequestBodyParams<TParams extends ParamsDictionary, TBody> extends Request {
  body: TBody;
  params: TParams;
}
