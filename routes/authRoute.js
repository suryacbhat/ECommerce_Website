import  express  from "express";
import {registerController,loginController,testContoller,forgotPasswordController} from '../controller/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router=express.Router();

//routing
//Register method POST
router.post('/register',registerController);

//LOGIN || POST
router.post("/login", loginController);


//Forgot password
router.post('/forgot-password',forgotPasswordController )
//test routes
router.get('/test',testContoller,requireSignIn);

//protected user route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})


export default router;