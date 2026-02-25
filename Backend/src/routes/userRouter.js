import express from 'express'
import { authMiddleware, authorizeRole } from '../middlewares/authMiddleware.js';
import { allBaby } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/all-baby', authMiddleware, authorizeRole('user','admin'), allBaby);

export default userRouter;
