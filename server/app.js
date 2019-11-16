const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const fs = require('fs')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.get('/', function (req, res) {
    let rawdata = fs.readFileSync('Output.txt');
    let data = JSON.parse(rawdata);
    res.send(data)
})

app.post('/post', function (req, res) {
    res.send('POST request to the homepage')
    // Data which will write in a file. 
    let data = req.body;
    // Write data in 'Output.txt' . 
    fs.writeFileSync('Output.txt', JSON.stringify(data))
})