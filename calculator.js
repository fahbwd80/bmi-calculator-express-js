const express = require('express');

const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});

app.post('/', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight/ ((height/100) * (height/100));


    if (result < 18.5){
        res.send("The bmi is " + result + " Underweight");
    } else if (result < 25) {
        res.send("The bmi is " + result + " Normal");
    } else if (result < 30) {
        res.send("The bmi is " + result + " Overweight");
    } else {
        res.send("The bmi is " + result + " Obese");
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});