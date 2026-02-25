import express from 'express'
import { createUserProject, getUserCredits, getUserProject, getUserProjects, PurchaseCredits, togglePublish } from '../controller/userController'
import { protect } from '../middlewares/auth';


console.log("✅ userRoutes is loading...");
const userRouter = express.Router();
userRouter.get('/credits',protect,getUserCredits)
userRouter.post('/project',protect,createUserProject)
userRouter.get('/project/:projectId',protect,getUserProject)
userRouter.get('/projects',protect,getUserProjects)
userRouter.get('/publish-toggle/:projectId',protect,togglePublish)
userRouter.post('/publish-toggle/:projectId',protect,PurchaseCredits)

export default userRouter
