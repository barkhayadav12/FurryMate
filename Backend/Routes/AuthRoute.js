const {Signup, Logout}=require("../Controllers/AuthControllers")
const router=require("express").Router();
const {Login}=require("../Controllers/AuthControllers");
const { userVerification } = require("../Middlewares/AuthMiddlewares.js");
router.post("/signup",Signup)
router.post("/login",Login)
router.get("/logout",Logout)
router.post("/services",userVerification)

router.get('/',userVerification,(req,res)=>{
    return res.json({email:req.email,username:req.username})
})


module.exports=router