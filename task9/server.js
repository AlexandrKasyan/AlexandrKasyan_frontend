'use strict'

const express = require('express');
const fs = require('fs');
const jsonParser = express.json()
const cors = require("cors");
const PORT = 3000;
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use('/', express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/getInfo', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)
    fs.readFile('listStudent.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        let array = JSON.parse(data);     
        let arrayStudent = [];

        for(let i = req.body.idStart; i < req.body.count+req.body.idStart; i++)
        {
            arrayStudent.push(array[i]);
        }

        res.send(JSON.stringify({
            'students' : arrayStudent
        }));
    })
});

app.post('/delete', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('listStudent.json', 'utf8', (err, data) => {
        if (err) console.log(err)
        let array = JSON.parse(data)

        array.forEach(function(el, i) {
            if (el.id == req.body.id) array.splice(i, 1)
          })
          fs.writeFile('listStudent.json', JSON.stringify(array), (err) => {
              if (err) console.log(err)
          })
       
         res.send()
    })
});

app.post('/getCount', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)
    fs.readFile('listStudent.json', 'utf8', (err, data) => {
        if (err) console.log(err)
        let array = JSON.parse(data)        
        let count = 0;

        for(let i = 0; i <= array.length; i++)
        {
            if(array[i]!=null )
                count+=1;
        }

        res.send(JSON.stringify({
            'count' : count
        }));
    })
});

app.post('/add', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('listStudent.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        let array = JSON.parse(data);
        let studentInfo = {};
        studentInfo["id"] = array.length;
        studentInfo["firstName"] = req.body.firstName;
        studentInfo["secondName"] = req.body.secondName;
        studentInfo["age"] = req.body.age;
        array.push(studentInfo )
        fs.writeFile('listStudent.json', JSON.stringify(array), (err) => {
            if (err) console.log(err)
        })
        res.send()
    })

});

app.post('/edit', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400)

    fs.readFile('listStudent.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        let array = JSON.parse(data);
        let studentInfo = {};
        studentInfo["id"] = req.body.id;
        studentInfo["firstName"] = req.body.firstName;
        studentInfo["secondName"] = req.body.secondName;
        studentInfo["age"] = req.body.age;
        array[req.body.id] = studentInfo;
        fs.writeFile('listStudent.json', JSON.stringify(array), (err) => {
            if (err) console.log(err)
        })
        res.send()
    })

});

app.listen(PORT, 'localhost', (error)=> {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});