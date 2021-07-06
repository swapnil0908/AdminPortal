const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Node API')
})

app.get('/getData', (req, res) => {
    let rawdata = fs.readFileSync('/Users/swapnil0908/Downloads/test1.json');
    res.send(rawdata);
    //res.json({'message': 'Hello World3'})
})

app.post('/ping', function (req, res) {
    res.send(req.body)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))