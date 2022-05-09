import { Router } from "express";
import { userLogin } from "../controllers/tokenController.js";
import validLogin from '../middlewares/isValidLoginSchema.js';

const tokenRouter = Router();

tokenRouter.post('/login', validLogin, userLogin);

export default tokenRouter;
 