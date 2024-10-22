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
        const data=await EmpModel.insertMany(item);
        res.status(200).json({ message: 'Post successful'});

    }
    catch (err) {
        res.status(400).json({ error: 'Error: ' + err.message });
      }
});
router.put('/update/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await EmpModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('edit sucessful');
    }
    catch(err){
        res.status(404).send('edit unsuccessful')
    }
});
router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        await EmpModel.findByIdAndDelete(id,req.body);
        res.status(200).send('Delete Successful');
    }
    catch(err){
        res.status(404).send('Delete Unsuccessful')
    }
    });

module.exports=router;