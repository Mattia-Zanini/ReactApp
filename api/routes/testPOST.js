var express = require("express");
var router = express.Router();

/* POST api listing. */
router.post("/", function(req, res, next) {
    console.log('Request Type:', req.method);
    console.log('Request Body:', req.body);
    //res.send("API is working properly, and received the data");
});

module.exports = router;