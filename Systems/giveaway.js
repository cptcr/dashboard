const GiveawayDB = require('../database/giveaway');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');
const { required } = require('discord-dashboard');

const arrays = {
    categoryId: 'giveaway',
        categoryName: "Giveaway System",
        categoryDescription: "Setup the Giveaway System!",
        categoryImageURL: 'https://i.imgur.com/jay42DW.png',
        getActualSet: async ({guild}) => {
            return [
                { optionId: "givech",  data: GiveawayDB[guild.id] || null },
                { optionId: "giveembed", data: GiveawayDB[guild.id] || null },
            ]
        },
        setNew: async ({guild,data}) => {
            for(const option of data) {
                if(option.optionId === "givech") GiveawayDB[guild.id] = option.data.Channel;
                if(option.optionId === "giveembed") GiveawayDB[guild.id] = option.data.Embed;
            }
            return;
        },
        categoryOptionsList: [
            {
                optionId: 'givech',
                optionName: "Giveaway Channel",
                optionDescription: "Setup the Giveaway Channel",
                optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText])
            },{
                optionId: 'giveembed',
                optionName: 'Giveaway Embed',
                optionDescription: 'Configure the embed that will be sent on Giveaway.',
                optionType: DBD.formTypes.embedBuilder({
                    username: 'NEXUS',
                    avatarURL: 'https://cdn.discordapp.com/attachments/1112743789782638602/1147933262321291384/20230903_183644.png',
                    defaultJson: {
                        embed: {
                            title: 'Giveaway',
                            description: 'Rreact to this Embed to join to the Giveaway',
                            color: '#0000FF',
                            footer: {
                                text: 'Nexus GiveAways.',
                            },
                    },
                },
            })
        }
    ]
}

module.exports = arrays