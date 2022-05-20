// include node fs module
var fs = require('fs');
const fileName = './database.json';
const Logger = require("./logger.js");
const Color = require("./colours.js");

class ZannaDB {
    constructor() {
        this.users = [];
    }
    Init() {
        Logger.Log(Color.colours.fg.green + "DB connected." + Color.colours.reset);
        this.users = this.ReadFileDB();
        Logger.Log("There is " + Color.colours.fg.yellow + this.users.length + Color.colours.reset
            + " users registered in the DB.");
    }
    ReadFileDB() {
        let rawData = fs.readFileSync(fileName);
        return JSON.parse(rawData);
    }
    WriteFileDB() {
        let usersJson = JSON.stringify(this.users);
        fs.writeFileSync(fileName, usersJson, function (err) {
            if (err) throw err;
            Logger.Log("File is created successfully.");
        });
    }
    AddUser(usr, passwd) {
        if (this.FindUser(usr).found === false) {
            this.users.push({ usr, passwd });
            this.WriteFileDB();
            Logger.Log("Added a new user.");
        }
        else {
            Logger.Log("User already exists.");
        }
    }
    FindUser(usr) {
        let foundUser = { found: false, position: undefined, name: undefined, pass: undefined };
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].usr === usr) {
                foundUser.found = true;
                foundUser.position = i;
                foundUser.name = usr;
                foundUser.pass = this.users[i].passwd;
                break;
            }
        }
        return foundUser;
    }
    DeleteUser(usr) {
        let pos = this.FindUser(usr).position;
        if (pos !== undefined) {
            this.users.splice(pos, 1);
            this.WriteFileDB();
            Logger.Log("Deleted a user.");
        }
        else {
            Logger.Log("User not found or he doens't exist.");
        }
    }
    ChangeUser(usr, passwd) {
        let pos = this.FindUser(usr).position;
        if (pos !== undefined) {
            this.users[pos].usr = usr;
            this.users[pos].passwd = passwd;
            this.WriteFileDB();
            Logger.Log("Changed a user.");
        }
        else {
            Logger.Log("User not found or he doens't exist.");
        }
    }
    RandomID(n) {
        let rID = "";
        for (let i = 0; i < n; i++) {
            rID += (Math.random() + 1).toString(36).substring(7);
        }
        Logger.Log("Random id generated: " + rID);
        return rID;
    }
    GenerateUsers(n) {
        Logger.Log("Generating users...");
        for (let i = 0; i < n; i++) {
            let usr = this.RandomID(1);
            let passwd = this.RandomID(1);
            this.users.push({ usr, passwd });
        }
        Logger.Log("Users generated");
        this.WriteFileDB();
    }
}

module.exports = ZannaDB;