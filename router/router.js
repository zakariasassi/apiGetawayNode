const express = require('express')
const router  = express.Router();
const axios = require('axios')
const ServiceRepistory = require('./Services.json')
router.all('/:apiName/:path' , (req , res ) => { 
    console.log(req.params.apiName)
    axios.get(ServiceRepistory.services[req.params.apiName].url + req.params.path ).then((response) => {
        res.send(response.data)

}).catch((e) => {
    console.log(e)
})
})



module.exports = router;
