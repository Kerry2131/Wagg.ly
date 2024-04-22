const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkerSchema = new Schema ({
    name:{
        type: String,
        required: true
    },
    contact:{
        type: Number, 
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    aboutme:{
        type: String,
        required: true
    }

}, {timestamps: true})

const Walkers = mongoose.model('Walker', walkerSchema)

module.exports = Walkers;


