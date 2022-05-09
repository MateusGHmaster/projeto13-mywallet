import { Router } from 'express';
import tokenRouter from './tokenRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use(userRouter);
router.use(tokenRouter);

export default router;