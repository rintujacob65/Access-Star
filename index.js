const express = require('express')
//npm install cors
const cors = require('cors')
const setupDB = require('./config/database')
const router = require('./config/routes')
const app = express()
const port = 3045

app.use(express.json())
// for get files
app.use('/uploads',express.static('uploads'))
app.use(cors())
app.use('/',router)
//db configuration
setupDB()

app.listen(port,() => {
    console.log('listening on port', port)
})