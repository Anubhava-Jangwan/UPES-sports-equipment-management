import { Router, Request, Response } from 'express';
import { HTTP_STATUS } from '../../constants/http.constants.js';

export const authRouter = Router();

authRouter.post('/login', (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Auth module ready' });
});

authRouter.post('/register', (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Auth module ready' });
});
