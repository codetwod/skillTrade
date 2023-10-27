const express=require('express');
require('dotenv').config();
const dbConnect=require('./config/database');
const app=express();
app.use(express.json());
const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));
dbConnect();
const cloudinary=require('./config/cloudinary');
cloudinary.cloudinaryConnect();
const port=process.env.PORT;
const userRoute=require('./routes/route');
app.use("/api/v1",userRoute);
app.listen(port,()=>{
    console.log(`app running on ${port}`);
});