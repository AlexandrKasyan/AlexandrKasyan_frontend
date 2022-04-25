const express = require("express")
const app = express();
const jsonParser = express.json();
const fs = require('fs')
var cors = require("cors");

//Disable CORS policy
app.use(cors());

app.get("/", async function (request, response) {
    response.sendFile(__dirname + "index.html")
});

app.post('/order', jsonParser, function (req, res){
    //The file to which the data will be written
    let data = fs.readFileSync('pizzas.json', 'utf-8')
    let order = data === ''? [] : JSON.parse(data)
    //Adding data
    order.push({
        'dough': req.body.dough,
        'ingredients': req.body.ingredients,
        'date': new Date() + ''
    })

    data = JSON.stringify(order)
    fs.writeFileSync('pizzas.json', data)
    res.json({
        'dough': req.body.dough,
        'ingredients': req.body.ingredients,
        'sauces': req.body.sauces
    })
})
//We start the server on port 3000 and print a message to the console
app.listen(3000, () => console.log("Сервер запущен..."))