import express from 'express';
import { CustomerRoutes } from '../modules/Customer/customer.routes';
import { BikeRoutes } from '../modules/Bike/bike.routes';
import { ServiceRecordRoutes } from '../modules/ServiceRecord/serviceRecord.routes';
import { ContactRoutes } from '../modules/Contact/contact.routes';

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
  {
    path: '/services',
    route: ServiceRecordRoutes,
  },
  {
    path: '/contacts',
    route: ContactRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
