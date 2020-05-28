const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema
const stockSchema = new Schema ( {
    brand : { 
        type : String,
        required : true
    },
    // image : [{
    //     type : String,
    //     //required : true
    // }],
    image : {
        type : String
    },
    // rating : {
    //     type : Number,
    //     required: [true, 'A rating is required.'],
    //     min: [1, 'A minimum rating of "1" is required.'],
    //     max: [5, '"5" is the maximum rating.']
    // },
    quantity : {
        type : Number,
        required : true,
        min : 1
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

//model
const Stock = mongoose.model('Stock',stockSchema)
module.exports = Stock