const {z}=require('zod');

//Creating Object Schema

const signupSchema=z.object({
    username:z.
    string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 characters"})
    .max(255,{message:"Name must not be more than 255 characters"})
    ,email:z.
    string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email Address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"})
    ,phone:z.
    string({required_error:"Phone No. is required"})
    .trim()
    .min(10,{message:"Phone No. must be of 10 characters"})
    .max(10,{message:"Phone No. must be of 10 characters"})
    ,password:z.
    string({required_error:"Name is required"})
    .trim()
    .min(8,{message:"Password must be atleast of 8 characters"})
    .max(1024,{message:"Password must not be more than 1024 characters"})
})


module.exports=signupSchema;