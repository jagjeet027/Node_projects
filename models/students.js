const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    // define your schema fields here
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Student', studentSchema);