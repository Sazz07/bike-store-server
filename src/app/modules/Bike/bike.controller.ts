import { BikeService } from './bike.service';
import sendResponse from '../../../shared/sendResponse';
import catchAsync from '../../../shared/catchAsync';
import status from 'http-status';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeService.createBike(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeService.getAllBikes();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Bikes fetched successfully',
    data: result,
  });
});

const getSingleBike = catchAsync(async (req, res) => {
  const result = await BikeService.getSingleBike(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getSingleBike,
};
