const express = require('express'); //Line 1
var bodyParser = require('body-parser')
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

app.use(express.static(__dirname)); //using a static html file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const usrnm = "";
const passwd = "";

// create a GET route
app.get('/', (req, res) => { //Line 9
    //res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.get('/user', (req, res) => {
    console.log("GET credentials: " + this.usrnm + " " + this.passwd);
    if (this.usrnm === "admin" && this.passwd === "admin") {
        console.log("ok u can go");
        res.send({ login: true });
    }
    else {
        console.log("not ok");
        res.send({ login: false });
    }
    this.usrnm = "";
    this.passwd = "";
});

app.post('/user', (req, res) => {
    res.redirect('back');
    console.log("POST request received");
    console.log(req.body);
    this.usrnm = req.body.username;
    this.passwd = req.body.password;
});