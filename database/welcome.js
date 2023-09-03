const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Embed: Object,
});

module.exports = mongoose.model("welcomeSystem", Schema);