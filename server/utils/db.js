const mongoose=require('mongoose')

const URL=process.env.MONGODB_URL

const connectDb=async ()=>{
    try{
      await mongoose.connect(URL)
      console.log("MONGO DB CONNECTED");
    }
    catch(err){
       console.log("Connection Unsuccessfull")
    }
}

module.exports=connectDb;