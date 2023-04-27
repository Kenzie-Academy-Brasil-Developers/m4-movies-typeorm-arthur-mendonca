import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

class AppError extends Error {
  statuscode: number;

  constructor(message: string, statuscode: number = 400) {
    super(message);
    this.statuscode = statuscode;
  }
}

const handleErrors = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof ZodError) {
    return response.status(400).json({
      message: err.flatten().fieldErrors,
    });
  }
  if (err instanceof AppError) {
    return response.status(err.statuscode).json({
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    message: "Internal server error",
  });
};

export { AppError, handleErrors };
