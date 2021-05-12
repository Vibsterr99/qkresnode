const mongoose=require('mongoose')


const seatsSchema = new mongoose.Schema({

    seatno: {
        type: String,
        required:true
    },
    slot: {
        type: String,
        required:true
    },
    time: {
        type: String,
        required:true
    },
    QR: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('seat', seatsSchema)