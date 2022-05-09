import { Router } from 'express';
import { createTransaction, createUser, getHome } from '../controllers/userController.js';
import { validSignUp } from '../middlewares/isValidSignUprSchema.js';
import { validTransaction } from '../middlewares/isValidTransactionSchema.js';
import { validToken } from '../middlewares/isValidTokenSchema.js';

const userRouter = Router();

userRouter.post('/sign-up', validSignUp, createUser);
userRouter.post('/home/transactions', validToken, validTransaction, createTransaction);
userRouter.get('/home', validToken, getHome);

export default userRouter;