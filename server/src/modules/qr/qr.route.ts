import { Router, Request, Response } from 'express';
import { HTTP_STATUS } from '../../constants/http.constants.js';

export const qrRouter = Router();

qrRouter.get('/scan/:code', (req: Request, res: Response) => {
  res
    .status(HTTP_STATUS.OK)
    .json({ success: true, message: 'QR module ready', data: { code: req.params.code } });
});
