const router=require('express').Router()
const BikeSell=require('../models/Bikes')

router.post('/sell',async (req,res)=>{
const bikesell=new BikeSell({
    bikename:req.body.bikename,
    bikemodel:req.body.bikemodel,
    regno:req.body.regno,
    fuel:req.body.fuel,
    bikecolor:req.body.bikecolor,  
    Desc:req.body.Desc
})

try{
  const bike=await bikesell.save();
  console.log(bike)
  res.status(201).json(bike)

}
catch(err){
    console.log(err)
    res.status(400).json(err);
}
})



module.exports =router