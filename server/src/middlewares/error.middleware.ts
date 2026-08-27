import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/app.error.js';
import { HTTP_STATUS } from '../constants/http.constants.js';
import { logger } from '../config/logger.config.js';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: {
        code: err.constructor.name,
        details: err.details,
      },
    });
    return;
  }

  logger.error('Unhandled Application Exception', err);

  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Internal server error occurred',
    error: {
      code: 'InternalServerError',
    },
  });
};
