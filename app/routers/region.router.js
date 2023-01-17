const express = require("express"); 
const router = express.Router();
const region = require('../controllers/region.controller')

router.get("/", region.getRegions);

module.exports = router;