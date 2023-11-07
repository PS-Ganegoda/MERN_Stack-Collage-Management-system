const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const studentAuthSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});


studentAuthSchema.methods.generateAuthToken = function(){
    //const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"});
    const token = jwt.sign({_id:this._id},"secret",{expiresIn:"7d"});

    return token;
};

const validate = (data)=>{
    const studentValidateSchema = Joi.object({
        username: Joi.string().required().label("User Name"),
        password : passwordComplexity().required().label("Password")
    });
    return studentValidateSchema.validate(data);
};

const studentAuthModel = mongoose.model("StudentsAuthentications", studentAuthSchema);

module.exports = {studentAuthModel,validate};
