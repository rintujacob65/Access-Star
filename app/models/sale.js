const mongoose = require('mongoose')

//schema
const Schema = mongoose.Schema
const saleSchema = new Schema ( {
    no : {
        type : Number,
        required : true,
        unique : true
    },
   deliveredBy : {
        type : String,
        required : true
    },
    billno : {
        type : String,
        required : true,
        unique : true
    },
    dealerName : {
        type : String,
        required : true
    },
    place : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    stock : {
        type :  Schema.Types.ObjectId,
        required : true,
        ref : 'Stock'
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

//model
const Sale = mongoose.model('Sale',saleSchema)
module.exports = Sale