const ModMailDB = require('../database/modmail');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
    categoryId: 'modmail',
    categoryName: "ModMail System",
    categoryDescription: "Setup the ModMail System!",
    categoryImageURL: 'https://i.imgur.com/jay42DW.png',
    getActualSet: async ({guild}) => {
        return [
            { optionId: "mmch", data: ModMailDB[guild.id] || null }
        ]
    },
    setNew: async ({guild,data,newData}) => {
        for(const option of data) {
            if(option.optionId === "mmch") ModMailDB[guild.id] = option.data.Channel;
        }
        return;
    },
    categoryOptionsList: [
        {
            optionId: 'mmch',
            optionName: "ModMail Channel",
            optionDescription: "Setup the ModMail Channel",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText])
        },
    ]
}

module.exports = arrays