var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname)); //using a static html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
})

app.post('/', (req, res) => {
    res.json("POST request received");
    console.log("POST request sent");
})

var server = http.listen(9000, () => {
    console.log('Server is running on port', server.address().port)
});