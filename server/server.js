const express = require('express');
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;

const Logger = require("./logger.js");
const Color = require("./colours.js");
const ZannaDB = require('./zannaDB.js')
var dataBase = new ZannaDB();

app.use(express.static(__dirname)); //using a static html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//clean the console
console.clear();
// This displays message that the server running and listening to specified port
app.listen(port, () => Logger.Log("Listening on port " + Color.colours.fg.red + port + Color.colours.reset));
//initialize the database
dataBase.Init();
//Logger.Log(dataBase.users);
//

// create a GET route
app.get('/', (req, res) => {
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/randID', (req, res) => {
    Logger.Log("Sending random ID.");
    res.send({ idGenerated: dataBase.RandomID(5) });
});

app.get('/user', (req, res) => {
    /*if (req.cookies["logged_in"] == "true") {
        Logger.Log("You are logged in");
    }
    else {
        Logger.Log("You are not logged in");
    }*/
    Logger.Log("GET credentials: " + isValidCred);
    res.send({ credentialsValid: isValidCred, status: 200 });
});

var isValidCred = "false"; //check user credentials
app.post('/user', (req, res) => {
    res.redirect('back');
    Logger.Log("POST request received.");
    Logger.Log(req.body);
    let user = dataBase.FindUser(req.body.username);
    if (user.found == true) {
        if (req.body.username === user.name && req.body.password === user.pass) {
            Logger.Log("User credentials are valid.");
            isValidCred = "true";
        }
        else {
            Logger.Log("User credentials are not valid.");
        }
    }
    else {
        Logger.Log("User not founded.");
    }
});

//va messo alla fine
app.get('*', function (req, res) {
    res.status(404).send('Erorr 404: Page not found.');
});