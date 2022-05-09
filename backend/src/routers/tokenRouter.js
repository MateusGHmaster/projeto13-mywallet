import { Router } from "express";
import { userLogin } from "../controllers/tokenController";
import { validLogin } from '../middlewares/isValidLoginSchema';

const tokenRouter = Router();

tokenRouter.post('/login', validLogin, userLogin);

export default tokenRouter;
 