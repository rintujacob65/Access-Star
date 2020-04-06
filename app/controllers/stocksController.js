const Stock = require('../models/stock')


module.exports.list = (req,res) => {
    Stock.find({ user : req.user._id})
    .then((stocks) => { 
        res.json(stocks)
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.show = (req,res) => {
    const id = req.params.id
    Stock.findOne({user : req.user._id, _id:id})
    .then((stock) => {
        if(stock){
            res.json(stock)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}
module.exports.create = (req,res) => {
    console.log("file",req.file)
   // const body = req.body
    //const stock = new Stock(body)
    const stock = new Stock({
        _id : req.body._id,
        brand : req.body.brand,
        image : req.file.path,
        rating : req.body.rating,
        quantity : req.body.quantity,
        user : req.body.user

    })
    stock.save()
    .then((stock) => {
        res.json(
            stock
        )
    })
    .catch((err) => {
        res.json(err)
    })
    }

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Stock.findOneAndUpdate({ user : req.user._id, _id : id}, body, 
        { new: true, runValidators: true})
    .then((stock) => {
        res.json(stock)
    })
    .catch((err) => {
        res.json(err)
    })
    }
module.exports.destroy = (req,res) => {
    const id = req.params.id
    Stock.findOneAndDelete({ user : req.user._id, _id : id})
        .then((stock) => {
           if(stock){
            res.json(stock)
           } else {
            res.json({})
           }
        })
        .catch( (err) => {
            res.json(err)
        })
    }