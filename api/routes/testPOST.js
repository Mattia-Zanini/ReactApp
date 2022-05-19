var express = require("express");
var router = express.Router();

/* POST api listing. */
router.post("/testPOST", function (req, res, next) {
    /*console.log('Request Type:', req.method);
    console.log('Request Body:', req.body);
    console.log('Request Username:', req.body.username);
    console.log('Request Password:', req.body.password);
    if (req.body.username == "admin" && req.body.password == "admin") {
        console.log('Login Successful');
        res.redirect('back');
        console.log('Send this: ', { status: 'Login Successful' });
    }*/
    res.json({ nome: "ciao", cognome: "Dario" });
    //res.send("API is working properly, and received the data");
});

module.exports = router;