const LogsDB = require('../database/logs');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
    categoryId: 'logs',
    categoryName: 'Logs System',
    categoryDescription: 'Setup the Logs system.',
    categoryImageURL: 'https://i.imgur.com/jay42DW.png',
    categoryOptionsList: [
        {
            optionId: 'logch',
            optionName: 'Logs Channel',
            optionDescription: 'Setup the Logs Channel.',
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText]),
            getActualSet: async ({ guild }) => {
                let data = await LogsDB.findOne({ Guild: guild.id }).catch(err => { })
                if(data) return data.Channel
                else return null
                },
            setNew: async ({ guild, newData }) => {
                let data = await LogsDB.findOne({ Guild: guild.id }).catch(err => { })
                if(!newData) newData = null
                if(!data) {
                    data = new LogsDB({
                        Guild: guild.id,
                        Channel: newData,
                    })
                    await data.save()
                } else {
                    data.Channel = newData
                    await data.save()
                }
            },
        }
    ]
}

module.exports = arrays