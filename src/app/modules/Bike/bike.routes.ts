import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BikeValidation } from './bike.validation';
import { BikeController } from './bike.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeZodSchema),
  BikeController.createBike
);

router.get('/', BikeController.getAllBikes);
router.get('/:id', BikeController.getSingleBike);

export const BikeRoutes = router;
