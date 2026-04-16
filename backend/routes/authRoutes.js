import express from "express"
import { login } from "../controllers/Auth/loginController.js";
import { register } from "../controllers/Auth/registerController.js";


const authRouter = express.Router();

authRouter.post('/login' , login);
authRouter.post('/register' , register);


export default authRouter;