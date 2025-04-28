import { Bike } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBike = async (data: Bike) => {
  const result = await prisma.bike.create({
    data,
    include: { customer: true },
  });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany({ include: { customer: true } });
  return result;
};

const getSingleBike = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
    include: { customer: true },
  });
  return result;
};

export const BikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
};
