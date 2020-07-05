var express = require('express');
var router = express.Router();
const {addEmployee,getAllEmployee,assignSurvey,findOne,deleteOne} = require("../controllers/employeeController")

/* GET users listing. */
router.get('/', getAllEmployee);
router.post('/', addEmployee);
router.post('/:id', assignSurvey);
router.get('/:id',findOne );
router.delete('/:id/:empID',deleteOne);


module.exports = router;
