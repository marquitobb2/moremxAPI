var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var mongoose = require("mongoose")
const morgan = require('morgan')
var Schema = mongoose.Schema

//conection mongo
var url = 'mongodb://localhost/moremx'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//middlewares
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(methodOverride())


//routes
app.use(require('./routes/view'))
app.use('/users',require('./routes/users'))

//server
var PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log("node esta corriendo en el puerto http://localhost:4000");
})