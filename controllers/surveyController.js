const survey = require('../models/surveySchema')

const addSurvey = async(req,res) => { 
    try{
     const {body:{surveyName}} = req
     const newSurvey = new survey({
         surveyName
     })
     const response = await newSurvey.save()
     res.json(response)
    }
    catch(err){
        console.log(err)
    }
}
const getAllSurvey = async(req,res) => {
   try{
      const response = await survey.find()
      res.json(response)
   }
   catch(error){
       console.err(error)
   }
}
module.exports = {addSurvey,getAllSurvey}