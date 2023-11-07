const express = require("express");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const {instructorAuthModel,validate} = require("../models/instructorAuth");
const Joi = require("joi");

const router = express.Router();

router.post("/register", async(req,res)=>{

    console.log("Registser called");

   try{
        // const {error} = validate(req.body);
        // if(error){
        //     return res.status(400).send({message:error.details[0].message});
        // }

        const user = await instructorAuthModel.findOne({username: req.body.username});
        if(user){
            return res.status(409).send({message:"User with given username already Exist!"})
        }

        console.log(user);

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new instructorAuthModel({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });


    } catch (error){
        res.status(500).send({ message: "Internal Server Error" });

    }

});

router.post("/login", async(req,res)=>{



    //try {
        const { error } = validate2(req.body);
        if(error){
            return res.status(400).send({ message: error.details[0].message });  
        }

        const user = await instructorAuthModel.findOne({ username: req.body.username });

        if(!user){
            return res.status(401).send({ message: "Invalid Username or Password" });
        }

        //console.log(user);

        const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);

        if(!validPassword){
            return res.status(401).send({ message: "Invalid Email or Password" });
        }

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" });
        
    // } catch (error) {
    //     res.status(500).send({ message: "Internal Server Error" });
    // }

});

const validate2 = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;