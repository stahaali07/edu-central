import  express from "express";
import { RegistrationUser, ActivateUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post('/registration', RegistrationUser);

userRouter.post('/activate-user', ActivateUser);

export default userRouter;