const {Schema,model} = require('mongoose')

const surveySchema = new Schema({
   surveyName:{
       type: String
   },

//    assignedEmployees: {
//     type: Schema.Types.ObjectId,
//     ref : "employee"
// }
   
})

module.exports = model("survey",surveySchema)