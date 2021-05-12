const { Timestamp } = require('bson')
const mongoose=require('mongoose')


const doctorSchema = new mongoose.Schema({

    Date: {
        type: String,
        required:true
    },
    Time: {
        type: String,
        required:true
    },
    RollNo: {
        type: String,
        required:true
    },
    Smail: {
        type: String,
        required:true
    },
    Contact: {
        type: Number,
        required:true
    },
    Mail: {
        type: String,
        required:true
    },
    Title: {
        type: String,
        required:true
    },
    Complaint: {
        type: String,
        required:true
    },
    Issue: {
        type: String,
        required:true
    },
    Suggestion: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('doctor', doctorSchema)