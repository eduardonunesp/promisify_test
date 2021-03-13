const {join} = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(join(__dirname, 'root')))

app.listen(port, () => {
  console.log(`SERVER listening at http://localhost:${port}`)
})
