const express = require('express');

const router = express.Router();
// const crudController = require('../controller/crud')

router.get('/getpatiens' ,  (req , res) => {
    console.log("call")
    res.send( "Hi From Patien")
})

module.exports = router;
