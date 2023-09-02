let DBD = require("discord-dashboard");
const image = DBD.formTypes.input("Image URL", 8, 2500, false, false)

if (!image.data.startsWith("https://")) {
    return "Please use a https:// image source link!";
}

module.exports = image