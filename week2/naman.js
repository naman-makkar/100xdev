const express  = require("express");
const app = express();

const users = [
    {
        name:"Naman",
        kidneys : [{

            healthy: false
        }]
    }
];

app.use(express.json())

app.get('/', function(req,res){
    const namanKidneys = users[0].kidneys;
    const numberofKidneys= users[0].kidneys.length;
    const healthyKidneys = namanKidneys.filter(function(kidney){
        return kidney.healthy;
    });
    const noofhealthyKidneys = healthyKidneys.length;
    console.log(noofhealthyKidneys);

    res.json({
        namanKidneys,
        numberofKidneys,
        noofhealthyKidneys
    })

})

app.post('/', function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done!"
    })
})

app.listen(3000);