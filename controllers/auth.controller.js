const authService = require('../services/auth.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// verify authentication

module.exports.isAuthenticated = async(req, res, next)=>{
    try{
        const verified = await jwt.verify(req.headers.token, process.env.JWT_SECRET);
        if(!verified){
            res.status(400).json({error: e.message, data: null, token: null, message: 'user not authenticated'})
        }
        next();
    }
    catch(e){
        console.log(e)
        res.status(400).json({error: e.message, data: null, token: null, message: 'something went wrong'})
    }

}

// Register
const hashPassword = (password, saltRound) => {
    console.log(password, saltRound);
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRound, (err, hash) => {
            if (err) {
                reject(err)
            }
            resolve(hash);
        })
    })
}

module.exports.register = async (req, res, next) => {
    try {
        const { body } = req;   
        console.log(req)  
        const saltRound = 10;
        body.password = await hashPassword(body.password, saltRound);
        const user = await authService.createUser(body);
        const userObj = JSON.parse(JSON.stringify(user));
        delete userObj.password;

        const token = await jwt.sign({
            data: userObj
        }, process.env.JWT_SECRET , {
            expiresIn: '24h'
        });
        return res.status(200).json({ error: false, data: null, token: token, message: 'Registration Complete' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ error: e, data: null, token: null, message: 'something went wrong' })
    }
}

//Login

const comparePassword = (password, hash) =>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare(password, hash, (err, hash)=>{
            if(err){
                reject(err)
            }
            resolve(hash)
        })
    })
}

module.exports.login = async(req, res, next)=>{
    try{
        const user = await authService.findUserByEmail(req.body.email);
        const matchPassword = await comparePassword(req.body.password, user.password);
        console.log(matchPassword);
        if(!matchPassword){
            res.status(500).json({error: e, data: null, token: null});
        }
        const userObj = JSON.parse(JSON.stringify(user));
        delete userObj.password;

        const token = jwt.sign({
            data: userObj
        }, process.env.JWT_SECRET,{
            expiresIn: '24h'
        })
        res.status(200).json({error: false, data: null, token: token, message: 'Login Successfully'})
    }
    catch(e){
        res.status(500).json({error: e, data: null, token: null, message: 'something went wrong'})
    }
}
