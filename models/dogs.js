const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema ({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number, 
        required: true,
    },
    breed:{
        type: String, 
        required: true,
    },
    aboutme:{
        type: String,
        required: true,
    },

}, {timestamps: true});

const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog;

