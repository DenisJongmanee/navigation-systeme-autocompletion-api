const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const regionRoutes = require("./app/routers/region.router");


const app = express();

app.use(function (req, res, next) {
    console.log("get");
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Authorization, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({parameterLimit: 100000, limit: '500mb', extended: false }));

app.options('*', cors());

app.use("/api/regions", regionRoutes);

module.exports = app;