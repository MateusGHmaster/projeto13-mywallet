import { Router } from 'express';
import { createTransaction, createUser, getHome } from '../controllers/userController';
import { validSignUp } from '../middlewares/isValidSignUprSchema';
import { validTransaction } from '../middlewares/isValidTransactionSchema';
import { validToken } from '../middlewares/isValidTokenSchema';

const userRouter = Router();

userRouter.post('/home', validSignUp, createUser);
userRouter.post('/home/transactions', validToken, validTransaction, createTransaction);
userRouter.get('/home', validToken, getHome);

export default userRouter;