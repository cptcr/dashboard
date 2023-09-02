let DBD = require("discord-dashboard");
const thumbnail = DBD.formTypes.input("Thumbnail URL", 8, 2500, false, false)

if (!thumbnail.data.startsWith("https://")) {
    return "Please use a https:// image source link!";
}

module.exports = thumbnail