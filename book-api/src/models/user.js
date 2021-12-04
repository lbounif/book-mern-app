const mongoose = require ('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        //required : true,
        trim : true
    },
    email : {
        type : String,
        required :true,
        unique : true,
        trim: true,
        lowercase : true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        } 
    },
    password : {
        type : String,
        required : true,
        trim: true,
        minlength: 7,
        validate(value){
            if (value.toLowerCase().includes("password")){
                throw new Error('Password cannot contain "password"')
            }
        } 
    },
    age : {
        type : Number,
        default : 0,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        } 
    },
    tokens : [{
        token : {
            type :String,
            required : true
        }
    }]

},{
    timestamps: true  // create at, updated at
})

// Hash the plain text password before saving
userSchema.pre('save', async function (next){
    const user = this   // refer to userSchema
    user.password = await bcrypt.hash(user.password, 8)
    next()
})

//Generate Auth token
userSchema.methods.generateAuthToken = async function (){
    const user = this  // refer to userSchema
    const token = jwt.sign({_id: user._id.toString()},process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token

}

const User = mongoose.model("User", userSchema)

module.exports = User