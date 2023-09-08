const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Category: String,
    Panel: Object,
    LogsCH: String,
    Staff: String
});

module.exports = mongoose.model("ticketSystem", Schema);