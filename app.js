const express = require('express');
const path = require('path');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')

//import route
const surveyRouter = require('./routes/surveyRoute');
const employeeRouter = require('./routes/employeeRoute');
const { Mongoose } = require('mongoose');

//env file config
require('dotenv').config()

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


//route middleware
app.use('/api/employee', employeeRouter);
app.use('/api/survey', surveyRouter);

//connect to db
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true},  
    () => console.log("connect to db"))

module.exports = app;
