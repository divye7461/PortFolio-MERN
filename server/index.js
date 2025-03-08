require("dotenv").config();
const express=require('express')
const cors=require('cors')
const adminRoute=require('./routes/admin-router');
const serviceRoute=require('./routes/service-router');
const contactRoute=require('./routes/contact-router');
const authRoute=require('./routes/auth-router')
const connectDb =require('./utils/db');
const errorMiddleWare = require("./middlewares/error-middleware");
const app=express();

//handling cors policy

const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions))

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)
app.use("/api/admin",adminRoute);

app.use(errorMiddleWare);

const PORT=process.env.PORT || 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server Running At PORT ${PORT}`)
})})