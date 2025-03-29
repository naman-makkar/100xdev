const express = require("express");
const zod = require("zod");
const { User } = require("../db");

const router = express.Router();

const signUpZod = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

router.post("/signup", (req,res) => {
    const body = req.body;
    const {success} = signUpZod.safeParse(body);
    if(!success) {
        return res.json({
            msg : "email already taken / incorrect input"
        })
    }
    const existUser = User.findOne({
        username : body.username
    })

    if(existUser) {
        res.status(411).json({
            msg : "already exists"
        })
    }

    


    
})