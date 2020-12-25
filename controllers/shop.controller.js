const shopService =  require('../services/shop.service')

module.exports.create = async (req, res, next)=>{
    try{
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({message: 'Something went wrong'})
    }
}

module.exports.getAll = async(req, res, next) =>{
    try{
        const getAllShop = await shopService.getAll(req.body);
        return res.status(200).json(getAllShop);
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message: 'Something went wrong'})
    }
}

module.exports.getById = async(req, res, next) =>{
    try{
        // const id = JSON.parse(req.body.id)
        const getById = await shopService.getById(req.params.id)
        return res.status(200).json(getById);
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message: 'Something went wrong'})
    }
}

module.exports.updateById = async(req, res, next) =>{
    try{
        const updateById = await shopService.updateById(req.params.id)
        return res.status(200).json(updateById)
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message: "Something went wrong"})
    }
}

module.exports.deleteById = async(req, res, next)=>{
    try{
        const deleteById = await shopService.deleteById(req.params.id)
        res.status(200).json(deleteById)
    }
    catch(e){
        res.status(500).json({message: "Something Went Wrong"})
    }
}