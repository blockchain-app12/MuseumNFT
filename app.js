var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
require("dotenv").config()
var databaseconnection = require('./Dbconnection/config.js');
mongoose.Promise = global.Promise;

mongoose.connect(databaseconnection.url,{useNewUrlParser:true}).then(()=>{
    console.log("****** Mongodb Connected remote Host server ******");
}).catch(err =>{
    console.log("****** Mongodb Disconnected ! ******* -", err);
});

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());
app.use(cors());
app.use(function(req, res, next) {    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
require('./Routes/routes')(app);

var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server listening on port:", port);
})