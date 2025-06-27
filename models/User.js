const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const { isEmail } = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter An Email Id'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please Enter A Valid Email']
    },
    password: {
        type: String,
        required: [true, "Please Enter An Password"],
        minlength: [6,'Minimum Password Length Is 6 Characters']
    }
})

// Static method to login user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth)
            return user;
        throw new Error('Incorrect Password!');
    }
    throw new Error('Incorrect Email Id!');
}

// Fire a function before a doc saved to DB
userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

const User = mongoose.model('user', userSchema);
module.exports = User;