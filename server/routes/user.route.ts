import  express from "express";
import { RegistrationUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post('/registration', RegistrationUser);

export default userRouter;