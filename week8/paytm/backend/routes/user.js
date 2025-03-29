//backend/routes/user.js
const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const {authMiddleware} = require("../middleware")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


const router = express.Router();
const app = express();

const signupZod = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string() 
})
// req body > parse > !success > return error > 411 > existing user check > return error if yes > else create user..assign details > jwt

console.log('user router loaded');
router.get("/hello", (req,res)=>{
    res.json({
        msg:"hello"
    })
})


router.post("/signup", async(req,res)=>{
    const bodyy = req.body;
    const { success } = signupZod.safeParse(bodyy);
    if(!success) {
        return res.status(411).json({
            msg : "Incorrect inputs"
        })
    }
    const existUser = User.findOne({
        username : bodyy.username // username from body request, for exist area
    })
    if(existUser) {
        res.status(411).json({
            msg : "Email already taken"
        })
    }
    const username = user.create(body.response); 
    const dbUser = User.create(bodyy);
    const userId = dbUser._id;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        msg : "user created successfully!",
        token : token
    })

})



// put request for update 
// auth middleware > update zod schema > function > pehle auth > safe parse > not success then 411 > else updateOne req.body using id> send successful status

const updateDetails = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
});

router.put("/", authMiddleware, async(req,res)=>{
    const {success} = updateDetails.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            msg : "error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id : req.userId
    })

    res.json({
        msg : "Updated successfully"
    })


})

// get user data on dashboard
// auth > filter > regex > res.json

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";  // Use req.query to get query parameters

    // Use the correct regex pattern for filtering
    
    const users = await User.find({
        $or: [
            { firstName: { $regex: filter, $options: "i"} },  // Case-insensitive search
            { lastName: { $regex: filter , $options: "i"} }
        ]
    });

    // If users is an array, map through it
    if (Array.isArray(users) && users.length > 0) {
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        });
    } else {
        res.json({
            user: []  // Return an empty array if no users are found
        });
    }
});


const signInZod = zod.object({
    username: zod.string().email(),
    password : zod.string()
})

//define zod input schema of signin > take req body > parse > 
router.post("/signin", async(req,res)=>{
    const {success} = signInZod.safeParse(req.body);
    if(!success) {
        res.status(411).json({
            msg : "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password

    })

    if(user) {
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET);

        res.json({
            token:token
        })
    } 
    else {
        res.status(411).json({
            msg : "Error while logging in"
        })
    }
})
module.exports = router;