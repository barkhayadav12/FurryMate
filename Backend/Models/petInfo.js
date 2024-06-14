const mongoose=require('mongoose');

const PetSchema=new mongoose.Schema({
    name:String,
    age:Number,
    sex:String,
    email:String,
    city:String,
    state:String,
    country:String,
    contactNumber:Number,
    petType:String,
    petName:String,
    petColor:String,
    petBreed:String,
    photo:String,
})

const petModel=mongoose.model('Pet',PetSchema);
module.exports=petModel;