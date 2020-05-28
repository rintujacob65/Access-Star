const Employee = require('../models/employee')
let img = "http://localhost:3047"

module.exports.list = (req,res) => {
        Employee.find({user : req.user._id}).populate('user')
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
    console.log("passportImage",req.files.passportImage)

    const employee = new Employee({
        _id : req.body._id,
        name : req.body.name,
        birthDate : req.body.birthDate,
        address : req.body.address,
        mobileNo : req.body.mobileNo,
        passportNo : req.body.passportNo,
        emiratesIdImage : img +"/uploads/"+ req.files.emiratesIdImage[0].filename,
        visaImage :  img +"/uploads/"+req.files.visaImage[0].filename,
        profilePic :img +"/uploads/"+ req.files.profilePic[0].filename,
        passportImage : img + "/uploads/"+ req.files.passportImage[0].filename,
        user : req.body.user
    })
    console.log("employee new",employee)
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
    Employee.findOneAndUpdate({ user : req.user._id, _id : id }, body, 
        { new : true , runValidators : true})
   
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
