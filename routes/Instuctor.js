const express = require('express');
const routes = express.Router()

const InstructorDetail = require('../controllers/Instructor')
routes.post('/', InstructorDetail.InstructorRegistrationController)

module.exports = routes
