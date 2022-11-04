const express = require('express')
const app = express()
const port = 3001
app.use(express.json())
app.use('/',  require('./routers/Listrouters' ))
app.listen(port, () => console.log(`List app listening on port ${port}!`))