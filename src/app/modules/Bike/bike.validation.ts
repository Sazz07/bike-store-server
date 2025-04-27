import { z } from 'zod';

const createBikeZodSchema = z.object({
  body: z.object({
    brand: z.string({ required_error: 'Brand Name is required' }),
    model: z.string({ required_error: 'Model is required' }),
    year: z.number({ required_error: 'Year is required' }),
    customerId: z.string({ required_error: 'Customer ID is required' }),
  }),
});

const updateBikeZodSchema = z.object({
  body: z.object({
    brand: z.string({ required_error: 'Brand Name is required' }).optional(),
    model: z.string({ required_error: 'Model is required' }).optional(),
    year: z.number({ required_error: 'Year is required' }).optional(),
    customerId: z
      .string({ required_error: 'Customer ID is required' })
      .optional(),
  }),
});

export const BikeValidation = {
  createBikeZodSchema,
  updateBikeZodSchema,
};
