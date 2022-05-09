import { Router } from 'express';
import tokenRouter from './tokenRouter';
import userRouter from './userRouter';

const router = Router();

router.use(userRouter);
router.use(tokenRouter);

export default router;