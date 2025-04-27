import { z } from 'zod';

const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }).email(),
    phone: z.string({ required_error: 'Phone number is required' }),
  }),
});

const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }).optional(),
    email: z.string({ required_error: 'Email is required' }).email().optional(),
    phone: z.string({ required_error: 'Phone number is required' }).optional(),
  }),
});

export const CustomerValidation = {
  createCustomerZodSchema,
  updateCustomerZodSchema,
};
