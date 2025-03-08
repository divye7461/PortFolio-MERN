const jwt=require('jsonwebtoken');
const User=require('../models/userModel');

const authMiddleware=async (req,res,next)=>{
    const token=req.header('Authorization');

    if(!token){

        return res
        .status(401)
        .json({msg:"No token is present"});

    }
   
    const jwtToken=token.replace("Bearer","").trim();
    console.log('Token From auth middleware',token);
    
    try {

        const isVerified=jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        
        console.log(isVerified);

        const userData=await User.findOne({email:isVerified.email}).
        select({
            password:0,
        });

        console.log(userData);

        req.user=userData;
        req.token=token;
        req.userId=userData._id;

        //Data of user will be here

        //Payload of user-model with jwt.sign

        next();
    } catch (error) {
        return res.status(401)
                  .json({message:"Invalid token"});
    }
    
}

module.exports=authMiddleware;