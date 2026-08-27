import { Router, Request, Response } from 'express';
import { HTTP_STATUS } from '../../constants/http.constants.js';

export const adminRouter = Router();

adminRouter.get('/stats', (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Admin module ready', data: {} });
});
