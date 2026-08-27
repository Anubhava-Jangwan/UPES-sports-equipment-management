import { Router, Request, Response } from 'express';
import { HTTP_STATUS } from '../../constants/http.constants.js';

export const issueRouter = Router();

issueRouter.get('/', (_req: Request, res: Response) => {
  res.status(HTTP_STATUS.OK).json({ success: true, message: 'Issue module ready', data: [] });
});
