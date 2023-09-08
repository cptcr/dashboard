const TicketDB = require('../database/ticket');
const { ChannelType } = require('discord.js');
let DBD = require('discord-dashboard');
const { required } = require('discord-dashboard');

const arrays = {
    categoryId: 'ticket',
        categoryName: "Ticket System",
        categoryDescription: "Setup the Ticket System!",
        categoryImageURL: 'https://i.imgur.com/jay42DW.png',
        getActualSet: async ({guild}) => {
            return [
                { optionId: "tickch",  data: TicketDB[guild.id] || null },
                { optionId: "tickcat",  data: TicketDB[guild.id] || null},
                { optionId: "tickpanel", data: TicketDB[guild.id] || null },
                { optionId: "ticklogch", data: TicketDB[guild.id] || null },
                { optionId: "tickrol", data: TicketDB[guild.id] || null }
            ]
        },
        setNew: async ({guild,data}) => {
            for(const option of data) {
                if(option.optionId === "tickch") TicketDB[guild.id] = option.data.Channel;
                if(option.optionId === "tickcat") TicketDB[guild.id] = option.data.Category;
                if(option.optionId === "tickpanel") TicketDB[guild.id] = option.data.Panel;
                if(option.optionId === "ticklogch") TicketDB[guild.id] = option.data.Logs;
                if(option.optionId === "tickrol") TicketDB[guild.id] = option.data.Roles;

            }
            return;
        },
        categoryOptionsList: [
            {
                optionId: 'tickch',
                optionName: "Ticket Channel",
                optionDescription: "Setup the Ticket Channel",
                optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText])
            },{
                optionId: 'tickcat',
                optionName: 'Ticket Category',
                optionDescription: 'Setup the Ticket Category.',
                optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildCategory]),
            },{
                optionId: 'tickpanel',
                optionName: 'Ticket Panel',
                optionDescription: 'Configure the embed that will be sent on Ticket Panel.',
                optionType: DBD.formTypes.embedBuilder({
                    username: 'NEXUS',
                    avatarURL: 'https://cdn.discordapp.com/attachments/1112743789782638602/1147933262321291384/20230903_183644.png',
                    defaultJson: {
                        embed: {
                            title: 'Open Ticket',
                            description: 'Click on button below to open a Ticket!',
                            color: '#0000FF',
                            footer: {
                                text: 'Nexus Tickets.',
                            },
                    },
                },
            })
            },{
                optionId: 'ticklogch',
                optionName: 'Ticket Log Channel',
                optionDescription: 'Setup the Ticket Log Channel.',
                optionType: DBD.formTypes.channelsSelect(false, channelTypes = [ChannelType.GuildText]),
            },{
                optionId: 'tickrol',
                optionName: 'Ticket Staff Roles',
                optionDescription: 'Setup the Ticket Staff Roles.',
                optionType: DBD.formTypes.rolesMultiSelect(),
            }
    ]
}

module.exports = arrays