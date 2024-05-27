const express = require("express")
const app = express();
const port = 3000;

// function calculateSum(n){
//     let ans = 0;
//     for(let i = 0; i<n; i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// const app = express();

// app.get("/", function(req,res){
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })
const users = [{
    name: "Naman",
    kidneys: [{
        healthy : false
    }]
}];

//query parameters
app.get("/", function(req,res){
    const namanKidneys = users[0].kidneys;
    const totalKidneys = namanKidneys.length;

    let healthyKidneys = 0;

    for(let i = 0; i<totalKidneys; i++){
        if(namanKidneys[i].healthy){
            healthyKidneys = healthyKidneys+1;
        }
    }

    const unhealthyKidneys = totalKidneys - healthyKidneys;

    res.json({
        totalKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

//body 
app.use(express.json());
app.post("/", function (req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Doneeeee!"
    })
})

//put request
app.put("/", function (req,res){
    for(let i =0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : "put request done!"
    })
})

//delete
app.delete("/", function(req,res){
    if(isThereAtleastOneUnhealthy()){
        const newKidneys = [];

        for(let i =0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg:"donee. unhealthy kidneys deleted."
        })
    }
    else{
        res.status(411).json({
            msg : "apke pas bad kidney nhi hai."
        })
    }
})

function isThereAtleastOneUnhealthy(){
    let atleastOneUnhealthy = false;
    for(let i =0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthy = true;
        }
    }
    return atleastOneUnhealthy;
}
app.listen(port);
