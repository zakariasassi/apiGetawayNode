const express = require('express');

const router = express.Router();
// const crudController = require('../controller/crud')

router.get('/getlists' ,  (req , res) => {
    console.log("call")
    res.send( "Hi From Lists")
})

module.exports = router;
