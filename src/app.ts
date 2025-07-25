import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://bs-server-bvikr9rxf-sazz07s-projects.vercel.app/',
      'https://sazzad.vercel.app',
    ],
    credentials: true,
  })
);

// Home Route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our bike store server!');
});

// Application Routes
app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
