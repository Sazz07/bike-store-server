import express from 'express';
import { CustomerRoutes } from '../modules/Customer/customer.routes';
import { BikeRoutes } from '../modules/Bike/bike.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/bikes',
    route: BikeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
