var express = require('express');
var router = express.Router();
const {addSurvey,getAllSurvey} = require("../controllers/surveyController")
/* GET home page. */
router.get('/', getAllSurvey);
router.post("/",addSurvey)
router.put("/",function (req,res) {  
  
})
router.delete("/",function (req,res) {  
  
})

module.exports = router;
