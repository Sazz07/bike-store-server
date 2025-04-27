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

router.get('/', CustomerController.getAllCustomers);
router.get('/:id', CustomerController.getSingleCustomer);
router.put(
  '/:id',
  validateRequest(CustomerValidation.updateCustomerZodSchema),
  CustomerController.updateCustomer
);
router.delete('/:id', CustomerController.deleteCustomer);

export const CustomerRoutes = router;
