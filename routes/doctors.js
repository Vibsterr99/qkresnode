const express = require('express')
const DOCTOR = require('../models/doctor')
const router = express.Router()


router.get('/', async(req,res)=>{
    try{
            const doc = await DOCTOR.find()
            res.json(doc)
    }catch(err){
        res.send('Error'+err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
            const doc = await DOCTOR.findById(req.params.id)
            res.json(doc)
    }catch(err){
        res.send('Error'+err)
    }
})

router.post('/',async(req,res) =>{
    const docp = new DOCTOR({
        Date: req.body.Date,
        Time: req.body.Time,
        RollNo: req.body.RollNo,
        Smail: req.body.Smail,
        Contact: req.body.Contact,
        Mail: req.body.Mail,
        Title: req.body.Title,
        Complaint: req.body.Complaint,
        Issue: req.body.Issue,
        Suggestion: req.body.Suggestion
    })

    try{
        const s1=await docp.save()
        res.json(s1)
    }catch(err){
        res.send(err)
    }
})
router.patch('/:id', async(req,res)=>{
    try{
            const doc = await DOCTOR.findById(req.params.id)
            doc.Date= req.body.Date,
            doc.Time= req.body.Time,
            doc.RollNo= req.body.RollNo,
            doc.Smail= req.body.Smail,
            doc.Contact= req.body.Contact,
            doc.Mail= req.body.Mail,
            doc.Title= req.body.Title,
            doc.Complaint= req.body.Complaint,
            doc.Issue= req.body.Issue,
            doc.Suggestion= req.body.Suggestion
            const a1=await doc.save()
            res.json(a1)
    }catch(err){
        res.send('Error'+err)
    }
})
router.delete('/:id', async(req,res)=>{
    try{
            const doc = await DOCTOR.findById(req.params.id)
            const a1=await doc.delete()
            res.json("deleted")
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports = router