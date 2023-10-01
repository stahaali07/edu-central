import  express from "express";
import { RegistrationUser, ActivateUser, LoginUser, LogoutUser } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.post('/registration', RegistrationUser);

userRouter.post('/activate-user', ActivateUser);

userRouter.post('/login', LoginUser);

userRouter.get('/logout', LogoutUser);

export default userRouter;