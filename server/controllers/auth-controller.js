const User = require("../models/userModel");
const bcrypt=require("bcryptjs")


const home=async (req,res)=>{
    res.status(200).send("Welcome to this project by Routes Folder")
}

const register=async (req,res)=>{
    console.log(req.body);
    const {username,email,phone,password}=req.body;
    
    const userExist=await User.findOne({email:email})

    if(userExist) return res.status(400).send({message:"Email Already Exists"});
    

    //Hash the password using bcrypt

    // const saltRound=10;
    // const hash_password=await bcrypt.hash(password,saltRound);

    const userCreated=await User.create({
        username,
        email,
        phone,
        password//:hash_password
    })

    res.status(201).send({
        message:"Registration Successful",
        token: await userCreated.generateToken(),
        userId:userCreated._id.toString()
    })
}

const account=async (req,res)=>{
    const id=req.params.id;
    res.status(200).send(`Welcome ${id}`)
}

const login=async (req,res)=>{
    try{
        const {
            email,
            password
        }=req.body;

        const userExist=await User.findOne({email:email})
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        else{
            //const isPasswordValid=await bcrypt.compare(password,userExist.password);
            const user=await userExist.comparePassword(password);
            
            if(user){
                res.status(201).json({
                    msg:"Login Successful",
                    token: await userExist.generateToken(),
                    userId:userExist._id.toString()
                })
            }
            else{
                res.status(401).json({message:"Invalid Email Or Password"});
            }
        }
    }
    catch(error){
        res.status(500).send("Login Unsuccessfull");
    }
}

//User Data Sending Logic

const user=async (req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
        res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from the user route ${error}`)
    }
}

module.exports={
    home,
    register,
    account,
    login,
    user,
}