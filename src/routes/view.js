var express = require('express')
var router = express.Router()

router.get('/', (req,res)=> {
    res.send('bienvenido moremx API ');
})

module.exports = router