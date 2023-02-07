const express = require('express')
const routes = express.Router()

const CourseDetail = require('../controllers/Courses')

routes.post('/',CourseDetail.addCourseController)
routes.get('/:Course_Name',CourseDetail.getCourseController)
// routes.get('/getcourse',CourseDetail.noofcourse)
// routes.get('/get_course',CourseDetail.tablecoursedetails)

module.exports = routes