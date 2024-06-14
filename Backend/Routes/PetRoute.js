const {Router}=require('express')
const Pet=require('../Models/petInfo')
const router=Router();
const multer=require('multer')
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "Public/Images");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "_" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage: storage,
  });
  

router.post('/create',upload.single('photo'),(req,res)=>{
    Pet.create({name:req.body.name,age:req.body.age,email:req.body.email,city:req.body.city,state:req.body.state,country:req.body.country,contactNumber:req.body.contactNumber,sex:req.body.sex,petType:req.body.petType,petName:req.body.petName,petColor:req.body.petColor,petBreed:req.body.petBreed, photo: req.file.filename })
    .then(result=>res.json("Success"))
    .catch(err=>res.json(err))
})

router.get('/viewPost',(req,res)=>{
    Pet.find()
    .then((post)=>res.json(post))
    .catch(err=>res.json(err))
})

router.get('/adoptme/:id',(req,res)=>{
    const id=req.params.id;
    Pet.findById({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


module.exports=router;