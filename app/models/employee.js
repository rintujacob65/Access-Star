const mongoose = require('mongoose')

const Schema =  mongoose.Schema
const employeeSchema = new Schema ({
    name : {
        type :String,
        required : true
    },
    birthDate : {
        type : Date,
        required : true
    },
    address : [{
        type : String,
        required : true
    }],
    mobileNo : {
        type : String,
        required : true,
        unique : true,
        minlength : 10,
        maxlength : 10
    },
    passportNo : {
        type : String,
        required :true,
        unique : true
    },
    emiratesIdImage : [{
        type : Object,
        required : true
    }],
    //idRenewalReminder :{},
    //passportRenewalRemainder : {},
    visaImage : {
        type : Object,
         required : true
    },
    profilePic : {
        type : Object,
        required : true
    },
    passportImage : [{
        type : Object,
        required : true
    }],
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }

})

const Employee =  mongoose.model('Employee', employeeSchema)
module.exports = Employee
