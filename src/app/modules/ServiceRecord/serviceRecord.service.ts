import { ServiceRecord, Status } from '../../../../generated/prisma';
import prisma from '../../../shared/prisma';

const createServiceRecord = async (data: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: {
      ...data,
      status: data.status || Status.pending,
    },
    include: {
      bike: true,
    },
  });
  return result;
};

const getAllServiceRecords = async () => {
  const result = await prisma.serviceRecord.findMany({
    include: { bike: true },
  });
  return result;
};

const getSingleServiceRecord = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
    include: { bike: true },
  });
  return result;
};

const completeService = async (id: string, data: { completionDate?: Date }) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
    include: { bike: true },
  });

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: data.completionDate || new Date(),
      status: Status.done,
    },
    include: { bike: true },
  });

  return result;
};

const getOverdueServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: [Status.pending, Status.in_progress],
          },
        },
        {
          serviceDate: {
            lte: sevenDaysAgo,
          },
        },
      ],
    },
    include: { bike: true },
  });

  return result;
};

export const ServiceRecordService = {
  createServiceRecord,
  getAllServiceRecords,
  getSingleServiceRecord,
  completeService,
  getOverdueServices,
};
