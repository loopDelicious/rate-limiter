const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', async (req, res) => {
    function isOverLimit(thingToCheck) {
      // to define
    }
    // check rate limit
    let overLimit = await isOverLimit(req.ip)
    if (overLimit) {
      res.status(429).send('Too many requests - try again later')
      return
    }
    // allow access to whatever resources you want
    res.send("Accessed my precious")
  })

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))