import { Router, Request, Response } from 'express';
import { HTTP_STATUS } from '../../constants/http.constants.js';

export const equipmentRouter = Router();

equipmentRouter.get('/', (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Equipment module ready', data: [] });
});
