const router=require('express').Router();
const User = require('../models/User')

router.post('/register',async (req,res)=>{
const user=new User({
    name: req.body.name,
    password: req.body.password,
    address: req.body.address,
    license: req.body.license,
    phoneno: req.body.phoneno

})

try{
    const regusers= await user.save();
    console.log(regusers)
    res.status(201).json(regusers);
}
catch(err){
    console.log(err);
    res.status(400).json(err)
}
})


module.exports =router