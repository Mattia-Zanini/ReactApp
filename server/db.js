// include node fs module
var fs = require('fs');
const fileName = './database.json';

class DB {
    constructor() {
        this.users = [];
    }
    Init() {
        let rawData = fs.readFileSync(fileName);
        let jsonData = JSON.parse(rawData);
        this.users = jsonData;
        console.log("There is " + this.users.length + " users in the DB");
        //console.log(this.users);
    }
    AddUser(usr, passwd) {
        this.users.push({usr, passwd});
        let usersJson = JSON.stringify(this.users);
        fs.writeFileSync(fileName, usersJson, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
        console.log("There is a new user in the DB");
    }
}

module.exports = DB;