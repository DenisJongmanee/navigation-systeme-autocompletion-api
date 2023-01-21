const express = require("express"); 
const router = express.Router();
const city = require('../controllers/cities.controller')

router.get("/:codeDepartment", city.getCities);

module.exports = router;