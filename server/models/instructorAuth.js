const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const instructorAuthSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

instructorAuthSchema.methods.generateAuthToken = function(){
    //const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    const token = jwt.sign({_id:this._id},"secret1",{expiresIn:"7d"});

    return token;
};

const validate = (data)=>{
    const instructorValidateSchema = Joi.object({
        username: Joi.string().required().label("User Name"),
        password : passwordComplexity().required().label("Password")
    });
    return instructorValidateSchema.validate(data);
};

const instructorAuthModel = mongoose.model("InstrctorsAuthentications", instructorAuthSchema);

module.exports = {instructorAuthModel,validate};
