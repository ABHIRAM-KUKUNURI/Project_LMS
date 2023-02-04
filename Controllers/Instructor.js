const InstructorCTRL = require('../Models/InstrictorModel')

function InstructorRegistrationController(req, res){
    console.log(req.body)
    let InstructorData = InstructorCTRL.InstructorModel({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Message:req.body.Message,
        File:req.body.File
    })
    console.log(InstructorData)
    InstructorData.save((err,result) =>{
        if(err){
            res.send("error")
        }else{
            res.send("User registered successfully")
        }
    })
}


module.exports = {InstructorRegistrationController}