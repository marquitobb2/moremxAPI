var express = require('express')
var router = express.Router()
var schemaUser = require('../models/schema_user')

router.get('/', (req,res)=> {
    res.json({"user": "marco"})
})

//http://localhost:4000/users/pro?name=marco&pass=123
router.get('/pro', async (req, res)=>{
    var adduser = new schemaUser({name: req.query.name, pass: req.query.pass})
    await adduser.save().then(function(){
        res.send("se guardo")
    }, function(err){
        console.log(err);
        res.send("no guardo producto")
    })
})

module.exports = router