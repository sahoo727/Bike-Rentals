const router=require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
router.post('/register',async (req,res)=>{
const user=new User({
    name: req.body.name,
    password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SEC
      ).toString(),
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