const express = require('express')
const app = express()
const port = 3047
const router = require('./config/routes')

//npm install cors
const cors = require('cors')
const setupDB = require('./config/database')
var corsOptions = {
    exposedHeaders : ["content-Type", "x-auth"]
}

app.use(cors(corsOptions))
app.use(express.json())
// for get files
app.use('/uploads',express.static('uploads'))
app.use(express.static("public"))
app.use(express.static("files"))
//app.use(cors())
app.use('/',router)
//db configuration
setupDB()

app.listen(port,() => {
    console.log('listening on port', port)
})