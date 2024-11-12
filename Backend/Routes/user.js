const express=require('express')
const user=require('../model/userData');
const router=express.Router();
const app=express();
app.use(express.json());
const jwt=require('jsonwebtoken')

router.get('/check',async (req,res)=>{
    try{
        const data=await user.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})
router.post('/login', async (req,res)=>{
    const {name,password}=req.body;
    try {
    const exist=await user.findOne({name})
    if(!exist){
        res.json('user not found')
    }
    
        if(password==exist.password){
            const payload={name:exist.name,password:exist.password}
            const token=jwt.sign(payload,'secret',{expiresIn:'0.5h'})
            res.send({message:'login successful',usertoken:token})

        }
    }
    
    catch(err){
        console.log(err);
    }

})
router.post('/register', async(req,res)=>{
    try{
        const {name,password}=req.body;
        const userExist=await user.findOne({name:name});
        if(userExist){
            return res.status(400).json({message:"User already exist"});
        }
        else{
            const data=new user({
                name,
                password
            
        });
        await data.save();
        return res.status(201).json({message:'User created',data})
    } }
    catch(err) {
        res.status(500).json({message:err.message});
    }
    
})
module.exports=router;