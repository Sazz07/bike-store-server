import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:300'],
    credentials: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our bike store server!');
});

export default app;
