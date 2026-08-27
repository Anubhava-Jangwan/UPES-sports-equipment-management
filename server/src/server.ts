import { createServer } from 'http';
import { createApp } from './app.js';
import { env } from './config/env.config.js';
import { logger } from './config/logger.config.js';
import { initializeSockets } from './sockets/index.js';
import { prisma } from './config/prisma.config.js';

const app = createApp();
const httpServer = createServer(app);

// Initialize Socket.io
initializeSockets(httpServer);

const startServer = async () => {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully via Prisma');

    httpServer.listen(env.PORT, () => {
      logger.info(
        `UPES Sports Management Server running on port ${env.PORT} in ${env.NODE_ENV} mode`
      );
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
