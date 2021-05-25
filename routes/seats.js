const express = require('express')
const SEAT = require('../models/seat')
const router = express.Router()


router.get('/', async(req,res)=>{
    try{
            const seats = await SEAT.find()
            res.json(seats)
    }catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
            const seat = await SEAT.findById(req.params.id)
            res.json(seat)
    }catch(err){
        res.send('Error'+err)
    }
})

router.post('/',async(req,res) =>{
    const seatp = new SEAT({
        seatno: req.body.seatno,
        slot: req.body.slot,
        time: req.body.time,
        QR: req.body.qr
    })

    try{
        const s1=await seatp.save()
        res.json(s1)
    }catch(err){
        res.send(err)
    }
})
router.patch('/:id', async(req,res)=>{
    try{
            const seat = await SEAT.findById(req.params.id)
            seat.seatno = req.body.seatno,
            seat.slot = req.body.slot,
            seat.time = req.body.time,
            seat.QR = req.body.qr
            const a1=await seat.save()
            res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }
})
router.delete('/:id', async(req,res)=>{
    try{
            const seat = await SEAT.findById(req.params.id)
            const a1=await seat.delete()
            res.json("deleted")
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports = router