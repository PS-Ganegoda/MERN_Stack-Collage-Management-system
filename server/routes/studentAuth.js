const express = require("express");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const {studentAuthModel,validate} = require("../models/studentAuth")
const Joi = require("joi");

const router = express.Router();

router.post("/register", async(req,res)=>{

    console.log("Registser clled");

   try{
        // const {error} = validate(req.body);
        // if(error){
        //     return res.status(400).send({message:error.details[0].message});
        // }

        const user = await studentAuthModel.findOne({username: req.body.username});
        if(user){
            return res.status(409).send({message:"User with given username already Exist!"})
        }

        console.log(user);

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new studentAuthModel({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created successfully" });


    } catch (error){
        res.status(500).send({ message: "Internal Server Error" });

    }





    // const username = req.body.username;
    // const password = req.body.password;

    // const user = await studentAuthModel.findOne({ username });

    // if (user) {
    //     return res.status(400).json({ message: "Username already exists" });
    // }

    // // Hashing the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // const newUser = new studentAuthModel({ 
    //     username: username, 
    //     password: hashedPassword 
    // });

    // await newUser.save();

    // res.json({ message: "Student registered successfully" });

});

router.post("/login", async(req,res)=>{



    //try {
        const { error } = validate1(req.body);
        if(error){
            return res.status(400).send({ message: error.details[0].message });  
        }

        const user = await studentAuthModel.findOne({ username: req.body.username });

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




    // const username = req.body.username;
    // const password = req.body.password;

    // const user = await studentAuthModel.findOne({ username });

    // if(!user){
    //     return res.json({message: "User Doesn't Exisi!"});
    // }

    // // Compare the enterd password is same as the password in the database
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if(!isPasswordValid){
    //     return res.json({message: "Username or Password is Incorrect"});
    // }

    // // Json web token
    // const token = jwt.sign({id: user._id}, "secret");
    // res.json({token, userId: user._id});

});

const validate1 = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;