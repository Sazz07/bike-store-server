import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CustomerValidation } from './customer.validation';
import { CustomerController } from './customer.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(CustomerValidation.createCustomerZodSchema),
  CustomerController.createCustomer
);

export const CustomerRoutes = router;
