const { model, Schema } = require("mongoose");

let joinrole = new Schema({
    Guild: String,
    RoleID: String,
    RoleName: String
})

module.exports = model("joinrole", joinrole);