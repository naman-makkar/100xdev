const express = require("express");
const app = express();

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>14){
        next();
    }
    else {
        res.json({
            msg: "You are under-age!"
        });
    }
}

// app.use(isOldEnoughMiddleware) // all functions below this will by default use this middleware!

app.get("/ride1", isOldEnoughMiddleware, function(req,res){
    res.json({
        msg: "you have completed ride 1!"
    });
})

app.listen(3000);