
const express = require('express');
const userController=require("../controller/usersController")
const TaskController=require("../controller/TaskController")
const Middleware=require('../middleware/authMiddleware')




const router=express.Router();

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/verifyEmail/:email',userController.verifyEmail)
router.get('/verifyOtp/:email/:otp',userController.verifyOtp)
router.get('/passwordReset/:email/:otp/:Password',userController.passwordReset)
//After Login
router.get('/profileDetails',Middleware,userController.profileDetails)
router.post('/profileUpdate',Middleware,userController.profileUpdate)

//task create ,read ,update, delete

router.post('/task/Create',Middleware,TaskController.Create)
router.get('/taskRead',Middleware,TaskController.Read)
router.post('/taskUpdate/:id',Middleware,TaskController.Update)

router.get('/taskDelete/:id',Middleware,TaskController.delete)







module.exports=router;