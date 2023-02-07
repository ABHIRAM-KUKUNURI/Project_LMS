const db = require('./conn').db
const mongoose = require('./conn').mongoose

const Course = {
    Course_Name:{
        type:String,
        required:true
    },
    Course_Description: {
        type:String,
        unique: true 
    },
    Course_Modules: [{
        type: String,
        required: true
      }],
    Course_Img:{
        type:String
    },
    category_name:{
        type:String
    },
    Instuctor_Name:{
        type:String
    },
    Students_Enrolled:{
        type:[]
    }
}

let CourseModel = mongoose.model('COURSES_INFORMATION', Course,'COURSES_INFORMATION')
module.exports = {CourseModel}