import { Customer } from '../../../../generated/prisma';
import prisma from '../../../shared/prisma';

const createCustomer = async (data: Customer) => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomer = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomer = async (id: string, payload: Partial<Customer>) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return result;
};

const deleteCustomer = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
