import { PrismaClientValidationError } from '../../../generated/prisma/runtime/library';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';
import status from 'http-status';

const handlePrismaValidationError = (
  err: PrismaClientValidationError
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: '',
      message: err.message.split('\n').pop() || 'Validation Error',
    },
  ];

  return {
    statusCode: status.BAD_REQUEST,
    message: 'Validation Error',
    errorSources,
  };
};

export default handlePrismaValidationError;
