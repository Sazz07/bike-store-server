import { Server } from 'http';
import app from './app';
import config from './config';

const port = config.port;

(async function main() {
  app.listen(port, () => {
    console.log(`Bike Store Server is running on port ${port}`);
  }) as Server;
})();
