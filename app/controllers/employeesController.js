const Employee = require('../models/employee')

module.exports.list = (req,res) => {
        Employee.find({user : req.user._id})
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.show = (req,res) => {
    const id =  req.params._id
    Employee.findOne({ user : req.user._id, _id : id})
    .then((employee) => {
        if(employee){
            res.json(employee)
        } else {
            res. json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    console.log("emiratesIdImage",req.files.emiratesIdImage)
    console.log("visaImage",req.files.visaImage)
    console.log("profilePic",req.files.profilePic)
    
    const employee = new Employee({
        _id : req.body._id,
        name : req.body.name,
        birthDate : req.body.birthDate,
        address : req.body.address,
        mobileNo : req.body.mobileNo,
        passportNo : req.body.passportNo,
        emiratesIdImage :  req.files.emiratesIdImage,
         visaImage :  req.files.visaImage,
         profilePic : req.files.profilePic
    })
    console.log("employee",employee)
    employee.save()
    .then((employee) => {
        res.json(employee)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.update = (req,res) => {
    const body = req.body;
    const id = req.params.id;
    Employee.findOneAndUpdate({ user : req.user._id, id : _id }, body, 
        { new : true , runValidators : true
    })
    .then((employee) => {
        res.json(employee)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.destroy = (req,res) =>{
    const id = req.params.id
    Employee.findOneAndUpdate({ user : req.user._id, _id : id})
    .then((employee) => {
        if(employee){
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json({})
    })
}