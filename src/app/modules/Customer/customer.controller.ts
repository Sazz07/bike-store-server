import { CustomerService } from './customer.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import status from 'http-status';

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

export const CustomerController = {
  createCustomer,
};
