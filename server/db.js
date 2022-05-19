// include node fs module
var fs = require('fs');
const fileName = './database.json';

class DB {
    constructor() {
        this.users = [];
    }
    Init() {
        //console.log("DB connected");
        console.log(colours.fg.green, "DB connected", colours.reset);
        let rawData = fs.readFileSync(fileName);
        let jsonData = JSON.parse(rawData);
        this.users = jsonData;
        console.log("There is", colours.fg.yellow + this.users.length, colours.reset + "users in the DB");
        //console.log(this.users);
    }
    AddUser(usr, passwd) {
        this.users.push({ usr, passwd });
        let usersJson = JSON.stringify(this.users);
        fs.writeFileSync(fileName, usersJson, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
        console.log("There is a new user in the DB");
    }
}

module.exports = DB;

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