const express = require('express')
const { controller } = require('./controller/controller')

const PORT = 3000
const app = express()

app.use(express.json())

app.get('/', controller)

app.listen(PORT, () => console.log(`running at port ${PORT}`))