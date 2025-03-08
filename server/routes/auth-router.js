const express=require('express')
const authControllers =require("../controllers/auth-controller")
const signupSchema=require('../validators/auth-validator');
const loginSchema=require('../validators/auth-validator-login')
const validate=require('../middlewares/validate-middleware');
const authMiddleware=require('../middlewares/auth-middleware')

const router=express.Router();

router.get('/',authControllers.home);

router.post('/register',validate(signupSchema),authControllers.register);

router.post('/login',validate(loginSchema),authControllers.login);

router.route('/user').get(authMiddleware,authControllers.user);

module.exports=router;