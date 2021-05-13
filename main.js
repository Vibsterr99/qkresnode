const express = require('express')
const mongoose = require('mongoose')
const url = process.env.URL;
const app=express()
const PORT = process.env.PORT || 3000;

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})

app.use(express.json())


const seatsrouter = require('./routes/seats')
app.use('/seat',seatsrouter)
const docrouter = require('./routes/doctors')
app.use('/doctor',docrouter)

app.listen(PORT,function(){
    console.log('Server Started')
})