const express = require('express');
const bodyParser = require('body-parser');
const Core = require('./core');

const jscoin = new Core();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
    res.send(jscoin)
})

app.post('/transaction', function (req, res) {

})

app.get('/mine', function (req, res) {

})

app.listen(3000, function () {
    console.log('JSCOIN ROCKS! on port 3000')
})