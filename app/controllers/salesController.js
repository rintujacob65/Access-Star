const Sale = require('../models/sale')


module.exports.list = (req,res) => {
    Sale.find({ user : req.user._id}).populate('stock').populate('user')
    .then((sales) => { 
        res.json(sales)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.show = (req,res) => {
    const id = req.params.id
    Sale.findOne({user : req.user._id, _id:id}).populate('stock').populate('user')
    .then((sale) => {
        if(sale){
            res.json(sale)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.create = (req,res) => {
    const body = req.body
    const sale = new Sale(body)
    sale.user = req.user._id
    sale.save()
    .then((sale) => {
        res.json(
            sale
        )
    })
    .catch((err) => {
        res.json(err)
    })
    }

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Sale.findOneAndUpdate({ user : req.user._id, _id : id}, body, 
        { new: true, runValidators: true})
    .then((sale) => {
        res.json(sale)
    })
    .catch((err) => {
        res.json(err)
    })
    }
module.exports.destroy = (req,res) => {
    const id = req.params.id
    Sale.findOneAndDelete({ user : req.user._id, _id : id})
        .then((sale) => {
           if(sale){
            res.json(sale)
           } else {
            res.json({})
           }
        })
        .catch( (err) => {
            res.json(err)
        })
    }