const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv')
const app = express()
const UserRoute=require('./routes/Users')
const RegRoute=require('./routes/register')
const LogRoute=require('./routes/Login')
const Bikesell=require('./routes/Bikesell')

dotenv.config()

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("DB successfull")).catch((err)=>{console.log(err)})

app.use(express.json())
app.use('/',UserRoute);
app.use('/auth',RegRoute)
app.use('/auth',LogRoute);
app.use('/bike',Bikesell);


app.listen(5000, console.log('Listening on port: 5000'))
