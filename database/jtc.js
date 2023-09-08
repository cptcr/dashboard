const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Category: String,
});

module.exports = mongoose.model("jtcSystem", Schema);