const path = "./Forms";

//Channels
const channelSingle = require(`${path}/channelSingle`);
const channelMulti = require(`${path}/channelMulti`);

//Roles
const roleSingle = require(`${path}/roleSingle`);
const roleMulti = require(`${path}/roleMulti`);

//Embed
const color = require(`${path}/Inputs/color`);
const author = require(`${path}/Inputs/author`);
const description = require(`${path}/Inputs/description`);
const footer = require(`${path}/Inputs/footer`);
const image = require(`${path}/Inputs/image`);
const thumbnail = require(`${path}/Inputs/thumbnail`);
const title = require(`${path}/Inputs/title`);

//Switches

module.exports = {
    //Channels
    channelSingle,
    channelMulti,
    //Roles
    roleSingle,
    roleMulti,
    //Embed
    color,
    author,
    description,
    footer,
    image,
    thumbnail,
    title,
    //Switches
}