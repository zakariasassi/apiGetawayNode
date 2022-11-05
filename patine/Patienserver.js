const express = require('express')
const app = express()
const port = 3002

app.get('/',  require('./routers') )
app.listen(port, () => console.log(`Patien app listening on port ${port}!`))