const Color = require("./colours.js");

function GetCurrentDateTime(fileNameFormat) {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    switch (fileNameFormat) {
        case true:
            return year + "-" + month + "-" + day;
        case false:
            return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
    }
}

function LogFormatter(message) {
    if (message.includes("\n")) {
        let array = message.split("\n");
        let result;
        for (let i = 0; i < array.length; i++) {
            let n = i + 1;
            if (i == 0) {
                result = Color.colours.fg.blue + "[ " + GetCurrentDateTime(false) + " ] " +
                    Color.colours.fg.cyan + "(" + n + "/" + array.length + ") " + Color.colours.reset + array[i];
            } else {
                result += Color.colours.fg.blue + "\n[ " + GetCurrentDateTime(false) + " ] " +
                    Color.colours.fg.cyan + "(" + n + "/" + array.length + ") " + Color.colours.reset + array[i];
            }
        }
        return result;
    } else {
        return Color.colours.fg.blue + "[ " + GetCurrentDateTime(false) + " ] " +
            Color.colours.reset + message;
    }
}

exports.Log = (str) => {
    console.log(LogFormatter(str));
}