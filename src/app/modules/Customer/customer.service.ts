import { Customer } from '../../../../generated/prisma';
import prisma from '../../../shared/prisma';

const createCustomer = async (data: Customer) => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

export const CustomerService = {
  createCustomer,
};
