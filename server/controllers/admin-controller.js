const User=require('../models/userModel');
const Contact=require('../models/contact-model');
const getAllUsers=async (req,res,next)=>{
    try {
        const users=await User.find({},{password:0});
        if(!users || users.length===0){
            return res.status(404).json({message:"No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts=async (req,res,next)=>{

    try {
        const contactDetails=await Contact.find();

        if(!contactDetails || contactDetails===0){
            return res.status(404).json({message:"No Contact Msgs Found"});
        }

        return res.status(200).json(contactDetails);
    } catch (error) {
        next(error);
    }
}

const deleteUserById=async (req,res)=>{
      try {
        const id=req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});
      } catch (error) {
        next(error);
      }
}

const getUserById=async (req,res)=>{
    try {
        const id=req.params.id;
        const data=await User.findOne({_id:id},{password:0})
        return res.status(200).json(data);
      } catch (error) {
        next(error);
      }
}
const updateUserById=async (req,res)=>{
    try {
        const id=req.params.id;
        const updatedUserData=req.body;

        const updatedData=await User.updateOne({_id:id},{
            $set:updatedUserData,
        })

        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}
const deleteContactById=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}
module.exports={
    getAllUsers,
    getAllContacts,
    deleteUserById,
    getUserById,
    updateUserById,
    deleteContactById
}