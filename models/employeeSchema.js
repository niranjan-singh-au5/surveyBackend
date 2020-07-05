const {Schema,model} = require('mongoose')

const employeeSchema = new Schema({
   empName : {
       type: String,
   },
   assignedSurvey:[ {
       type: Schema.Types.ObjectId,
       ref : "survey"
   }]

})

module.exports = model("employee",employeeSchema)