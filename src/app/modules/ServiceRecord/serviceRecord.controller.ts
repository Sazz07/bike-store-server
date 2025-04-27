import { ServiceRecordService } from './serviceRecord.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import status from 'http-status';

const createServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.createServiceRecord(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

const getAllServiceRecords = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getAllServiceRecords();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service records fetched successfully',
    data: result,
  });
});

const getSingleServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getSingleServiceRecord(
    req.params.id
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});

const completeService = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.completeService(
    req.params?.id,
    req.body
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service marked as completed',
    data: result,
  });
});

const getOverdueServices = catchAsync(async (req, res) => {
  const result = await ServiceRecordService.getOverdueServices();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});

export const ServiceRecordController = {
  createServiceRecord,
  getAllServiceRecords,
  getSingleServiceRecord,
  completeService,
  getOverdueServices,
};
