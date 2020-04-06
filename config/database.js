const mongoose = require('mongoose')

const setupDB = () => {
    const mongoConnectionString = 'mongodb://localhost:27017/nov-accessstar-app'
    mongoose.connect(mongoConnectionString, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify : false})
   
        .then(() => {
            console.log("connected to db")
        })
        .catch((err) => {
             console.log(err)
        })
}
module.exports = setupDB