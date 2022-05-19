const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const DB = require('./db.js')
let dataBase = new DB();

app.use(express.static(__dirname)); //using a static html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//clean the console
console.clear();
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
//initialize the database
dataBase.Init();


// create a GET route
app.get('/', (req, res) => {
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/user', (req, res) => {
    console.log("GET credentials: " + isValidCred);
    res.send({ express: isValidCred, status: 200 });
});

var isValidCred = "false"; //check user credentials
app.post('/user', (req, res) => {
    res.redirect('back');
    console.log("POST request received");
    console.log(req.body);
    if (req.body.username === "admin" && req.body.password === "admin") {
        console.log("ok u can go");
        isValidCred = "true";
    }
    else {
        console.log("not ok");
    }
});