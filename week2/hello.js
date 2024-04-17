const express = require("express")

const app = express();
const port = 3000;

app.get("/", function(req,res){

    res.send("aur vi kiddaaan??");
})

app.post("/", function(req,res){
    
})

app.listen(port)