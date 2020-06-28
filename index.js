const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => { console.log("hello world")})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))