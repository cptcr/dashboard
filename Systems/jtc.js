const JTCDB = require('../database/jtc');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
    categoryId: 'jtc',
    categoryName: "JTC System",
    categoryDescription: "Setup the JTC System!",
    categoryImageURL: 'https://i.imgur.com/jay42DW.png',
    getActualSet: async ({guild}) => {
        return [
            { optionId: "jtcch", data: JTCDB[guild.id] || null },
            { optionId: "jtccat", data: JTCDB[guild.id] || null }
        ]
    },
    setNew: async ({guild,data,newData}) => {
        for(const option of data) {
            if(option.optionId === "jtcch") JTCDB[guild.id] = option.data.Channel;
            if(option.optionId === "jtccat") JTCDB[guild.id] = option.data.Category;
        }
        return;
    },
    categoryOptionsList: [
        {
            optionId: 'jtcch',
            optionName: "JTC Channel",
            optionDescription: "Setup the JTC Channel",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildVoice])
        },{
            optionId: 'jtccat',
            optionName: "JTC Channel",
            optionDescription: "Setup the JTC Channel",
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildCategory])
        },
    ]
}

module.exports = arrays