const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Patien!'))
app.listen(port, () => console.log(`Patien app listening on port ${port}!`))