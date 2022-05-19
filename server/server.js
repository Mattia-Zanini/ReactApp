const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 5000;
const ZannaDB = require('./zannaDB.js')
let dataBase = new ZannaDB();

app.use(express.static(__dirname)); //using a static html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//clean the console
console.clear();
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log("Listening on port", colours.fg.red + port, colours.reset));
//initialize the database
dataBase.Init();
dataBase.DeleteUser("ciao");
console.log(dataBase.users);


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


const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};