const Shop = require('../models/shop.model')
const ObjectId = require('mongodb').ObjectID;

module.exports.create = shop =>{
    return Shop.create(shop);
}

module.exports.getAll = () =>{
    return Shop.find({})
}

module.exports.getById = id =>{
    const hex = /[0-9A-Fa-f]{6}/g;
    id = (hex.test(id))? ObjectId(id) : id;
    return Shop.findById({'_id': id})
}

module.exports.updateById = id =>{
    const hex = /[0-9A-Fa-f]{6}/g;
    id = (hex.test(id))? ObjectId(id) : id;
    return Shop.findByIdAndUpdate({'_id': id},
    {$set:{owner: 'Mr.Shuvo'}}
    )
}

module.exports.deleteById = id =>{
    const hex = /[0-9A-Fa-f]{6}/g;
    id = (hex.test(id))? ObjectId(id) : id;
    return Shop.findByIdAndDelete({'_id' : id})
}