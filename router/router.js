const express = require('express')
const router  = express.Router();
const axios = require('axios')
const ServiceRepistory = require('./Services.json')
router.all('/:apiName/:path' , (req , res ) => { 
    console.log(req.params.apiName)
    if(ServiceRepistory.services[req.params.apiName].url){
    axios({
        method: req.method,
        url : ServiceRepistory.services[req.params.apiName].url + req.params.path ,
        headers: req.headers,
        data : req.data
    }).then((response) => {
        res.send(response.data)
}).catch((e) => {
    console.log(e)
})
    }else{
        res.send("Error 404 Not Found")
    }
})



module.exports = router;
