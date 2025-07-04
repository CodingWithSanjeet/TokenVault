const User = require('../models/User')
const jwt = require('jsonwebtoken')



const handleErrors = (err) =>{
    console.log(err.message, err.code)
    let errors = { }
    // Incorrect Email
    if(err.message === 'Incorrect Email Id!'){
        errors["email"] = "That email is not registered."
    }
    // Incorrect Password
    if(err.message === 'Incorrect Password!'){
        errors['password']="That password is incorrect."
    }
    // Duplicate Error Code
    if(err.code === 11000){
        errors["email"] = "Email is already registered."
    }
    // Validation Errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors;
}
const maxAge = 3 * 24 * 60 * 60
const createToken = (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn: maxAge
    })
}

module.exports.login_get = (req, res) =>{
    res.render('login')
}

module.exports.signup_get = (req, res) =>{
    res.render('signup')
}

module.exports.login_post = async (req, res) =>{
    const { email, password } = req.body;
    try{
        const user = await User.login(email, password)
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge: maxAge * 1000, httpOnly: true})
        res.status(200).json({user});
    }catch(err){
        const errors = handleErrors(err);
        res.status(400).send({errors})
    }
}

module.exports.signup_post = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.create({email, password});
        const token = createToken(user._id);
        res.cookie('jwt',token,{maxAge: maxAge * 1000, httpOnly: true})
        res.status(201).json({user});
    }catch(err){
       const errors=handleErrors(err);
        res.status(400).json({errors})
    }
}

module.exports.logout_get = (req, res) =>{
    res.cookie('jwt','',{maxAge: 1});
    res.redirect('/')
}