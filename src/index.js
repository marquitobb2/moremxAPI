var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var mongoose = require("mongoose")
const morgan = require('morgan')
var Schema = mongoose.Schema

//middlewares
/*app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json)*/
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(methodOverride())


//routes
app.use(require('./routes/view'))

//server
var PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log("node esta corriendo en el puerto http://localhost:4000");
})