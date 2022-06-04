const router=require('express').Router();
const { model } = require('mongoose');
const User=require('../models/User')
const CryptoJS = require("crypto-js");
router.post('/login',async (req,res)=>{
try{
    const name=await User.findOne({name:req.body.name})

    !name && res.status(400).json("Wrong credentials") 

    const hashedPassword = CryptoJS.AES.decrypt(
        name.password,
        process.env.PASSWORD_SEC
    );


    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;
    
    originalPassword != inputPassword && 
        res.status(401).json("Wrong Password");

     
const {password,...others}=name._doc;
    res.status(200).json(others)
}
catch(err){
   console.log(err)
}
})


module.exports = router;