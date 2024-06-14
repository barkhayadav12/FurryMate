require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const app=express();

//cors
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
    credentials:true
}));

const cookieParser = require("cookie-parser");
const authRoute =require("./Routes/AuthRoute")
const {MONGO_URL,PORT}=process.env;
const petRoute=require("./Routes/PetRoute")

//connecting mongodb

mongoose.connect(MONGO_URL).then(()=>console.log("MongoDB is connected successfully"))
.catch((err)=>console.error(err))

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use("/",authRoute)

app.use('/pet',petRoute)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})