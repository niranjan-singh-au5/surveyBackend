const employee = require("../models/employeeSchema")
// const { findByIdAndUpdate } = require("../models/employeeSchema")
const mongoose = require("mongoose")
const db= require('../models')
const { response } = require("../app")

const addEmployee = async(req,res) => {
    try{
      const {body:{empName}} = req
      const newUser = new employee({
          empName
      })
      const response = await newUser.save()
      res.json(response)
    }
    catch(err){
      console.log(err)
    }
}
const getAllEmployee = async(req,res) => {
   try{
      const response = await employee.find().populate("assignedSurvey")
      res.json(response)
   }
   catch(error){
       console.err(error)
   }
}
const assignSurvey = async(req,res) =>{
  // console.log("body", req.body)
 db.Survey.findOne({_id:req.body.id}).then((dbSurvey)=>{
   return db.Employee.findOneAndUpdate({_id:req.params.id},{$push:{assignedSurvey:dbSurvey._id}},{new:true,useFindAndModify:false})
 }).then((dbEmployee) =>{
  console.log(dbEmployee)
   return res.json(dbEmployee)
 }).catch((err)=>{
  console.err(err)
 })
}

const findOne = (req,res) =>{
    db.Employee.findOne({_id:req.params.id}).populate('assignedSurvey').then((dbEmployee) =>{
      return   res.json(dbEmployee)
    }).catch((err)=>{
      console.err(err)
    })
}

const deleteOne = (req,res) =>{
  db.Employee.findOneAndUpdate({_id:req.params.empID},{$pull:{assignedSurvey:req.params.id}}).then((dbEmployee) =>{
    return   res.json({status: 1,message: "assigned survey deleted successfully"}
)
  }).catch((err)=>{
    res.json({status: 0,message: "Error while deleting"})
  })
}

module.exports = {addEmployee,getAllEmployee,assignSurvey,findOne,deleteOne}