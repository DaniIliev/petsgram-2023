const express = require('express')
const setupExpressEngine = require('./config/handlebarsConfig')
const routes = require('./routes')
const mongooseConnect = require('./config/mongooseConnect')

const port = 3000
const app = express()
setupExpressEngine(app)

app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: false }))
app.use(routes)

mongooseConnect()



app.listen(port, () => console.log('Server is listen on port 3000...'))