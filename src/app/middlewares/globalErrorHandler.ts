import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import httpStatus from 'http-status';

import config from '../../config';
import handleZodError from '../errors/handleZodError';
import { TErrorSources } from '../interface/error';
import handlePrismaClientKnownError from '../errors/handlePrismaClientKnownError';
import handlePrismaValidationError from '../errors/handlePrismaValidationError';
import AppError from '../errors/AppError';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '../../../generated/prisma/runtime/library';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let status: number = httpStatus.INTERNAL_SERVER_ERROR;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  // ZodError handling
  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    status = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  // Prisma known request errors (P2002, P2003, P2025, etc.)
  else if (err instanceof PrismaClientKnownRequestError) {
    const simplifiedError = handlePrismaClientKnownError(err);
    status = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  // Prisma validation errors
  else if (err instanceof PrismaClientValidationError) {
    const simplifiedError = handlePrismaValidationError(err);
    status = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
  // Custom AppError
  else if (err instanceof AppError) {
    status = err?.statusCode;
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }
  // Generic Error
  else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err?.message,
      },
    ];
  }

  // Send the response
  res.status(status).json({
    success: false,
    status,
    message,
    error: errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
