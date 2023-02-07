const CourseModelCtrl = require('../models/Course')
const userModelCtrl = require('../models/userModel')


function handleEnroll(req,res){
  console.log(req.body)
  userModelCtrl.userModel.find({Email:req.body.Email},(err,docs) =>{
      if(err){
          console.log(err)
      }else{
          console.log(docs)
          
              userModelCtrl.userModel.updateOne({Email:req.body.Email},{$push:{Course_Name:req.body.Course_Name}},(err,docs) =>{
                  if(err){
                      console.log(err)
                  }else{
                      console.log(req.body)
                    //   res.send(docs)
              }
          })
          CourseModelCtrl.CourseModel.updateOne({Course_Name:req.body.Course_Name},{$push:{Students_Enrolled:req.body.Email}},(err,docs) =>{
            if(err){
                console.log(err)
            }else{
                console.log(req.body)
                res.send(docs)
            }
          })
              // res.send(docs)
          
  }
})
}


module.exports={handleEnroll}