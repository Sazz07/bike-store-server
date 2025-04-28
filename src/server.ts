import { Server } from 'http';
import app from './app';
import config from './config';

const port = config.port;

if (process.env.NODE_ENV !== 'production') {
  (async function main() {
    app.listen(port, () => {
      console.log(`Bike Store Server is running on port ${port}`);
    }) as Server;
  })();
}

export default app;
