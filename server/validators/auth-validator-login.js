const {z}=require('zod');
const { login } = require('../controllers/auth-controller');

const loginSchema=z.object({
    email:z.
    string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"})
    ,password:z.
    string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be atleast of 8 characters"})
    .max(1024,{message:"Password must not be more than 1024 characters"})
})

module.exports=loginSchema;