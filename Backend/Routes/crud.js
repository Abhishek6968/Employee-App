const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const EmpModel=require('../model/empData')
router.get('/view',async(req,res)=>{
    try{
        const data=await EmpModel.find();
        res.status(200).json(data);
}
catch(err){
    res.status(404).json({ message: 'Data not found' });
}
});
router.post('/add',async(req,res)=>{
    try{
        const item=req.body;
        const data=new EmpModel(item);
        const saveData=await data.save();
        res.status(200).json({ message: 'Post successful', employee: saveData });

    }
    catch (err) {
        res.status(400).json({ error: 'Error: ' + err.message });
      }
});

module.exports=router;