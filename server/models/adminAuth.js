const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const adminAuthSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

adminAuthSchema.methods.generateAuthToken = function(){
    //const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    const token = jwt.sign({_id:this._id},"secret3",{expiresIn:"7d"});

    return token;
};

const validate = (data)=>{
    const adminValidateSchema = Joi.object({
        username: Joi.string().required().label("User Name"),
        password : passwordComplexity().required().label("Password")
    });
    return adminValidateSchema.validate(data);
};

const adminAuthModel = mongoose.model("AdminsAuthentications", adminAuthSchema);

module.exports = {adminAuthModel,validate};