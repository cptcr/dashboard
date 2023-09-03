const WelcomeDB = require('../database/welcome');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');

const arrays = {
    categoryId: 'welcome',
    categoryName: 'Welcome System',
    categoryDescription: 'Setup the welcome system.',
    categoryImageURL: 'https://i.imgur.com/jay42DW.png',
    categoryOptionsList: [
        {
            optionId: 'welch',
            optionName: 'Welcome Channel',
            optionDescription: 'Setup the Welcome Channel.',
            optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText]),
            getActualSet: async ({ guild }) => {
                let data = await WelcomeDB.findOne({ Guild: guild.id }).catch(err => { })
                if(data) return data.Channel
                else return null
                },
            setNew: async ({ guild, newData }) => {
                let data = await WelcomeDB.findOne({ Guild: guild.id }).catch(err => { })
                if(!newData) newData = null
                if(!data) {
                    data = new WelcomeDB({
                        Guild: guild.id,
                        Channel: newData,
                    })
                    await data.save()
                } else {
                    data.Channel = newData
                    await data.save()
                }
            },
        }, {
            optionId: 'welembed',
            optionName: 'Welcome Embed',
            optionDescription: 'Configure the embed that will be sent once someone joins.',
            optionType: DBD.formTypes.embedBuilder({
                username: 'NEXUS',
                avatarURL: 'https://cdn.discordapp.com/attachments/1112743789782638602/1147933262321291384/20230903_183644.png',
                defaultJson: {
                    embed: {
                        description: 'Welcome, {user.username}!\nHave fun!',
                        footer: {
                            text: 'This is a sample message. Change it to your liking.',
                        },
                    },
                },
            }),
            getActualSet: async ({ guild }) => {
                let data = await WelcomeDB.findOne({ Guild: guild.id }).catch(err => { })
                if(data) return data.Embed
                else return null
                },
            setNew: async ({ guild, newData }) => {
                let data = await WelcomeDB.findOne({ Guild: guild.id }).catch(err => { })
                if(!newData) newData = null
                if(!data) {
                    data = new WelcomeDB({
                        Guild: guild.id,
                        Embed: newData,
                    })
                    await data.save()
                } else {
                    data.Embed = newData
                    await data.save()
                }
            },
        }
    ]
}

module.exports = arrays