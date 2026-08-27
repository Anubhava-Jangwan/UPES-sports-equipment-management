import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.config.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { authRouter } from './modules/auth/auth.route.js';
import { equipmentRouter } from './modules/equipment/equipment.route.js';
import { issueRouter } from './modules/issue/issue.route.js';
import { adminRouter } from './modules/admin/admin.route.js';
import { qrRouter } from './modules/qr/qr.route.js';

export const createApp = (): Express => {
  const app = express();

  // Security & standard middlewares
  app.use(helmet());
  app.use(
    cors({
      origin: env.CLIENT_URL,
      credentials: true,
    })
  );
  app.use(morgan(env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Global API Rate Limiter
  const limiter = rateLimit({
    windowMs: env.RATE_LIMIT_WINDOW_MS,
    max: env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use('/api', limiter);

  // Health check
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // API Routes
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/equipment', equipmentRouter);
  app.use('/api/v1/issues', issueRouter);
  app.use('/api/v1/admin', adminRouter);
  app.use('/api/v1/qr', qrRouter);

  // Global Error Handler
  app.use(errorHandler);

  return app;
};
