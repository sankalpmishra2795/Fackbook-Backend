const mongoose = require('mongoose')

const FackbookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please add a name"],
        trim:true,
        maxlength:[50,"Name can not be more than 50 characters"]
    },

    slug: String,

    email:{
        type: String,
         required: [true,"Please add an email"],
    },
   
    gender: {
        type: String,
         required: [true,"Please select gender"],
    },
    dob: {
        type: Date,
         required: [true,"Please add birthday"],
    },
    password: {
        type: String,
        required: [true, "Please add new password"],
        //  maxlength:[8,"Name can not be more than 8 characters"]
    },
    occupation: {
        type: String,
        
    },
    
   
},{timestamps:true})

module.exports = mongoose.model('Fackbook',FackbookSchema);