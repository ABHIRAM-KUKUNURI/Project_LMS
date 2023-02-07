const express = require('express')
const routes = express.Router()

const CourseDetail = require('../controllers/Courses')

routes.get('/get_course',CourseDetail.tablecoursedetails)
routes.get('/getcourse',CourseDetail.noofcourse)
module.exports = routes