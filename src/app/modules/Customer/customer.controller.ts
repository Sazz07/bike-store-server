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

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomers();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.getSingleCustomer(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerService.updateCustomer(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  await CustomerService.deleteCustomer(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer deleted successfully',
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
