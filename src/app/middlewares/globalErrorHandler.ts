import { NextFunction, Request, Response } from 'express';
import status from 'http-status';
import config from '../../config';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Something went wrong!';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: err,
    stack: config.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default globalErrorHandler;
