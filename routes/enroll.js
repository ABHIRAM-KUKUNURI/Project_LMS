const express = require('express');
const routes = express.Router()

const enrollDetail = require('../controllers/updateuser')
routes.post('/', enrollDetail.handleEnroll)
module.exports = routes



