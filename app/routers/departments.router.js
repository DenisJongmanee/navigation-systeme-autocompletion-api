const express = require("express"); 
const router = express.Router();
const department = require('../controllers/departments.controller')

router.get("/:idRegion", department.getDepartments);

module.exports = router;