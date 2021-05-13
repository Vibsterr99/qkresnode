const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://vibsterr:vibsterr99@cluster0.g1pdc.mongodb.net/QkRes?retryWrites=true&w=majority'
const app=express()

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

app.listen(1000,function(){
    console.log('Server Started')
})