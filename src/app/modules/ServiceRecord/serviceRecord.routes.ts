import express from 'express';
import { ServiceRecordValidation } from './serviceRecord.validation';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceRecordController } from './serviceRecord.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(ServiceRecordValidation.createServiceRecordSchema),
  ServiceRecordController.createServiceRecord
);

router.get('/', ServiceRecordController.getAllServiceRecords);
router.get('/status', ServiceRecordController.getOverdueServices);
router.get('/:id', ServiceRecordController.getSingleServiceRecord);
router.put(
  '/:id/complete',
  validateRequest(ServiceRecordValidation.completeServiceSchema),
  ServiceRecordController.completeService
);

export const ServiceRecordRoutes = router;
