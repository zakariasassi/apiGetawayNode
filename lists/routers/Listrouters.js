const express = require('express');

const router = express.Router();
 const crudController = require('../controller/crud')

router.get('/getlists' , crudController.getAllLists)

module.exports = router;
