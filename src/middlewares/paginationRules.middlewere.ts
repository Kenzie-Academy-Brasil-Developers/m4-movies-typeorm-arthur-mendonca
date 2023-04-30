import { NextFunction, Request, Response } from "express";

export const paginationRulesMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  let page: number | null = Number(request.query.page);

  let perPage: number | null = Number(request.query.perPage);

  let sortValue: string | null | undefined = request.query.sort?.toString();

  let orderValue: string | null | undefined = request.query.order?.toString();

  !page || page < 1 ? (page = 1) : page;

  !perPage || perPage < 1 || perPage > 5 ? (perPage = 5) : perPage;

  response.locals.page = page;
  response.locals.perPage = perPage;
  response.locals.sort = sortValue;
  response.locals.order = orderValue;

  return next();
};
