const db = require('./conn').db
const mongoose = require('./conn').mongoose

const Instructor = {
    FullName:{
        type:String,
        required:true
    },
    Email: {
        type:String
    },
    File:{
        type:String
    },
    Message:{
        type:String
    }
}

let InstructorModel = mongoose.model('InstructorDetails', Instructor,'InstructorDetails')
module.exports = {InstructorModel}