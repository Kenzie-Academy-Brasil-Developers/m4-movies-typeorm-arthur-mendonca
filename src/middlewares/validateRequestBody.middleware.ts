import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateRequestBodyMiddleware =
  (schema: ZodTypeAny) =>
  async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const data = schema.parse(request.body);

    return next();
  };

export default validateRequestBodyMiddleware;
