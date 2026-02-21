import express from 'express';
import { authMiddleware, authorizeRole } from '../middlewares/authMiddleware.js';
import { getAllUsers } from '../controller/adminController.js';

const adminRouter = express.Router();

adminRouter.get('/users', authMiddleware, authorizeRole('admin'), getAllUsers);

export default adminRouter;