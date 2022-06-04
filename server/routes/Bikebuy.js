const router=require('express').Router()
const Bikes=require('../models/Bikes')

router.get('/buy',async (req,res)=>{
    try{
       const searchbikes=await Bikes.find();
       res.status(200).json(searchbikes);
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
})



module.exports=router;