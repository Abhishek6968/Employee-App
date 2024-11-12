const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:String,
    password:Number

})
const user=mongoose.model('EmployeeUser',userSchema);
module.exports=user;