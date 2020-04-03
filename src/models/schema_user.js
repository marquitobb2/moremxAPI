var mongoose = require("mongoose")
var Schema = mongoose.Schema

var usuarios = {
    name: {type: String},
    pass: {type: String}
}
var user_schema = new Schema(usuarios)
var User = mongoose.model("User", user_schema)

module.exports = User