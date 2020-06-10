const express = require('express')
const app = express()

// loading body-parser
const bodyParser = require('body-parser')

// loading our routers
const billRouter = require('./routes/billRoutes.js')
const homeRouter = require('./routes/homeRoutes.js')
const logRouter = require('./routes/logRoutes.js')

// tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/cdn', express.static('public')) /* this will mount your public directory to '/cdn'.
i.e. your scripts folder will be at /cdn/scripts */

// mounting our routers
app.use('/bill-divider', billRouter)
app.use('/home', homeRouter)
app.use('/log', logRouter)

app.listen(3000)
console.log('Express server running on port 3000')
