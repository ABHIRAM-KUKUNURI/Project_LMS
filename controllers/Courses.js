const CourseCTRl = require('../models/Course')

function addCourseController(req,res){
    let addCourseData = CourseCTRl.CourseModel({
        Course_Name:req.body.Course_Name,
        Course_Img:req.body.Course_Img,
        Course_Description : req.body.Course_Description,
        Course_Modules:req.body.Course_Modules,
        category_name:req.body.category_name
    })
    console.log(addCourseData)
    addCourseData.save((err,result)=>{
        if(err){
            res.send("error")
        }else{
            res.send("Course added")
        }
    })
}

function getCourseController(req,res){
    var Course_Name = req.params.Course_Name;

    CourseCTRl.CourseModel.find({Course_Name:Course_Name},(err,docs) =>{
        if(err){
            console.log(err)
        }else{
            res.send(docs)
        }
    })
}

function noofcourse(req,res){
    CourseCTRl.CourseModel.countDocuments({},(err,count) =>{
        if(err) return res.send(err)
    return res.send({count})
    })
}
function tablecoursedetails(req,res){
    CourseCTRl.CourseModel.find({},(err,data) =>{
        if(err) throw err;
        return res.json(data)
        
    })
}

module.exports = {addCourseController,getCourseController,noofcourse,tablecoursedetails}