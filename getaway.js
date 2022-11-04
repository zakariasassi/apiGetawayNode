const express = require('express')
const router = require('./router/router')
const app = express()
const port = 3000
app.use(express.json())


app.use('/' , router)
app.listen(port, () => console.log(`Getaway app listening on port ${port}!`))