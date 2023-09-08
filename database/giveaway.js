const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    ID: String,
    Channel: String,
    Embed: Object
});

module.exports = mongoose.model("giveawaySystem", Schema);