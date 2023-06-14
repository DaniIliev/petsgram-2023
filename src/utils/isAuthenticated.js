const SECRET = require('../config/SECRET')
const jwt = require('jsonwebtoken')

exports.isAuthentication = async (req,res,next) => {
    const token = req.cookies['auth'];

    if(token){
        try{
        const decodetToken = await jwt.verify(token, SECRET)

        req.user = decodetToken
        req.isAuthenticated = true

        res.locals.username = decodetToken.username;
        res.locals.isAuthenticated = true
        }catch(err){
            res.clearCookie('auth')
            throw(err.message)
        }
    }
    next()
}

exports.isAuthenticated = (req,res, next) =>{
    if(!req.isAuthenticated){
        return res.redirect('/login')
    }
    next()
}