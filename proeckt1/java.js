const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res)){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res ){

 var num1= Number(req.body.n1);
 var num2= Number(req.body.n2);

 var result = num1 + num2;

  res.send("The result of the calculation is" + result);
});

app.get("/bmicalculationr", function (req, res);
});

app.post("/bmicalculationr", function (req, res){
    var weight = req.body.weight;
})

app.listen(3000, function (){
    console.log("Server is running on port 3000");
});