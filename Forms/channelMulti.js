let DBD = require("discord-dashboard");
const channel = DBD.formTypes.channelsMultiSelect(false, true, channelTypes = ['GUILD_TEXT', 'GUILD_ANNOUNCEMENT'], true, false, true);

module.exports = channel;