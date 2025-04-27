import { z } from 'zod';
import { Status } from '../../../../generated/prisma';

const createServiceRecordSchema = z.object({
  body: z.object({
    bikeId: z.string({
      required_error: 'Bike id is required',
    }),
    serviceDate: z
      .string({
        required_error: 'Service date is required',
      })
      .transform((str) => new Date(str)),
    description: z
      .string({
        required_error: 'Description is required',
      })
      .optional(),
    status: z
      .nativeEnum(Status, {
        required_error: 'Status is required',
      })
      .default(Status.pending),
    completionDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

const updateServiceRecordSchema = z.object({
  body: z.object({
    bikeId: z.string().optional(),
    serviceDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    description: z.string().optional(),
    status: z.nativeEnum(Status).optional(),
    completionDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

const completeServiceSchema = z.object({
  body: z.object({
    completionDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

export const ServiceRecordValidation = {
  createServiceRecordSchema,
  updateServiceRecordSchema,
  completeServiceSchema,
};
