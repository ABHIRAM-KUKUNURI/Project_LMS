const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(express.json())
app.use(cors())

const InstructorRoutes = require('./Routes/Instuctor')


app.use('/AddInstructor',InstructorRoutes)

app.listen(9999)


