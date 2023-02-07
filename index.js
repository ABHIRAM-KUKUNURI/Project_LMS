const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())


//routes
const InstructorRoutes = require('./routes/Instuctor')
const admin_instruct_info = require('./routes/admin_ins')
const CoursesRoutes = require('./routes/Courses')
const userRoutes = require('./routes/userRoutes')
const userProfileRoutes = require('./routes/user_profile')
const enrollRoutes = require('./routes/enroll')
const InstructorRoutesReg = require('./routes/ins_login')
const queriesroutes = require('./routes/queriesroute')
const course_Rou = require("./routes/courses_ROU")
//instructors
app.use('/AddInstructor',InstructorRoutes)
app.use('/getInstructors',admin_instruct_info)
app.use('/getInstructorInfo',admin_instruct_info)
app.use('/Instructor',InstructorRoutesReg)
//courses
app.use('/AddCourses',CoursesRoutes)
app.use('/get_Courses',CoursesRoutes)
app.use('/getcouseDetails',course_Rou)
app.use('/get_course_data',course_Rou)
//users
app.use('/getusercount',userRoutes)
app.use('/approveOrDecline',admin_instruct_info)
app.use('/registerUser', userRoutes)
app.use('/LogOutUser', userRoutes)
app.use('/get_users_data',userRoutes)

//user profile routes
app.use('/userProfile', userProfileRoutes)
//enroll
app.use('/enroll',enrollRoutes)

//queries
app.use('/get_queries_data',queriesroutes)
app.use('/getnoofqueries',queriesroutes)
app.use('/query',queriesroutes)

app.listen(9999)
