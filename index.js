// Define Packages
const { Client, GatewayIntentBits } = require('discord.js');
const SoftUI = require('dbd-soft-ui');
const config = require('./config.json');
const os = require('os');
let DBD = require('discord-dashboard');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(config.discord.token);

//category for commands
const moderation = require("./Categorys/moderation");
const community = require("./Categorys/community");
const leveling = require("./Categorys/leveling");
const warnsys = require("./Categorys/warnsys");
const ecosys = require("./Categorys/economy");
const mail = require("./Categorys/modmail");
const nsfw = require("./Categorys/nsfw");
const other = require("./Categorys/other");
const sys = require("./Categorys/systems");

//Setups
const welcomeSetup = require('./Systems/welcome');
const logsSetup = require('./Systems/logs');

//some imports
const Maintenance = require("./Data/underMaintenance");

//Export modules
module.exports = {
    client
}

//handler
const Handler = new DBD.Handler(
);

//Locales
const LOCALES = require("./Locales/locales");

//Dashboard
(async ()=>{
    await DBD.useLicense(config.dbd.license);
    DBD.Dashboard = DBD.UpdatedClass();
    //forms

    (async () => {
        await DBD.useLicense(config.dbd.license);
        DBD.Dashboard = DBD.UpdatedClass();
    
        const Handler = new DBD.Handler( 
            {
                store: process.env.MONGODBURL
            }
        ); 
    
        const { Category, Option } = Handler; 
    });    

    const Dashboard = new DBD.Dashboard({
        acceptPrivacyPolicy: true,
        useCategorySet: false,
        //Support Server
        supportServer: {
            slash: '/support-server',
            inviteUrl: 'https://discord.gg/z8nxPve4pn'
        },
        //Port
        port: config.dbd.port,
        //client
        client: config.discord.client,
        //redirect
        redirectUri: `${config.dbd.domain}${config.dbd.redirectUri}`,
        //domain
        domain: config.dbd.domain,
        //owners
        ownerIDs: config.dbd.ownerIDs,
        //Maintenance
        useThemeMaintenance: false,
        useTheme404: true,
        //Support Sever
        supportServer: {
            slash: '/support-server',
            inviteUrl: 'https://discord.gg/z8nxPve4pn'
        },
        //Join server
        guildAfterAuthorization: {
            use: true,
            guildId: "1121353922355929129"
        },
        //Invite
        invite: {
            clientId: "1046468420037787720",
            scopes:["bot", "application.commands"],
            permissions: '10982195068151',
        },
        //underMaintenance
        underMaintenance: Maintenance,
        //Permissions
        requiredPermissions: DBD.DISCORD_FLAGS.Permissions.ADMINISTRATOR, 
        //Logs
        minimizedConsoleLogs: true,
        //client
        bot: client,
        //Theme
        theme: SoftUI({
            locales: LOCALES,
            dbdriver: process.env.MONGODBURL,
            storage: Handler,
            colorScheme: "blue",
            /*themeColors: {
                primaryColor: "#000000",
                secondaryColor: "#ffffff"
            },*/
            customThemeOptions: {
                index: async ({ req, res, config }) => {
                    let username = req.session?.user?.username || "Guest"

                    const cards = [
                        {
                            title: "Current User",
                            icon: "single-02",
                            getValue: username,
                            progressBar: {
                                enabled: false,
                                getProgress: client.guilds.cache.size
                            }
                        },
                        {
                            title: "CPU",
                            icon: "single-02",
                            getValue: os.cpus()[0].model.replace('(R) Core(TM) ', ' ').replace(' CPU ', '').split('@')[0],
                            progressBar: {
                                enabled: false,
                                getProgress: 50
                            }
                        },
                        {
                            title: "System Platform",
                            icon: "single-02",
                            getValue: os.platform(),
                            progressBar: {
                                enabled: false,
                                getProgress: 50
                            }
                        },
                        {
                            title: "Server count",
                            icon: "single-02",
                            getValue: `${client.guilds.cache.size} out of 75`,
                            progressBar: {
                                enabled: true,
                                getProgress: (client.guilds.cache.size / 75) * 100
                            }
                        }
                    ]

                    const graph = {
                        values: [690, 524, 345, 645, 478, 592, 468, 783, 459, 230, 621, 345],
                        labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"]
                    }

                    return {
                        cards,
                        graph,
                        values: [],
                        premium: []
                    }
                },
            },
            websiteName: "Nexus",
            websiteTitle: "NEXUS - imagine a free discord bot",
            dashboardURL: "http://localhost",
            supporteMail: "toowake@proton.me",
            createdBy: "Nexus Development",
            icons: {
                favicon: process.env.ICON,
                noGuildIcon: "https://unlimitedworld.de/attachments/discord-mark-blue-png.64362/",
                sidebar: {
                    darkUrl: 'https://cdn.discordapp.com/attachments/1147892533855260823/1147934381491634346/20230903_183644.png',
                    lightUrl: 'https://cdn.discordapp.com/attachments/1147892533855260823/1147934317553664070/20230903_183622.png',
                    hideName: false,
                    borderRadius: true,
                    alignCenter: true
                },
            },
            index: {
                card: {
                    category: "Nexus",
                    title: "NEXUS - imagine a free discord bot",
                    description: "NEXUS Panel",
                    image: "https://cdn.discordapp.com/attachments/1147892533855260823/1147934381491634346/20230903_183644.png",
                    link: {
                        enabled: true,
                        url: "http://localhost/commands"
                    },
                },
                 premium: {
                    enabled: true,
                    card: {
                        title: "Want to suport this project?",
                        description: "You can become premium!",
                        bgImage: "https://cdn.discordapp.com/attachments/1112743789782638602/1147933261843157013/20230903_183622.png",
                        button: {
                            text: "Become Premium",
                            url: "https://patreon.com/nexusdevelopment"
                        }
                    }
                },
                feeds: {
                    category: "feeds",
                    title: "Feed",
                    description: "NEXUS Panel is still in progress. For questions and suggestions join our discord server!",
                    footer: "NEXUS"
                },
                information: {
                    category: "information",
                    title: "Information",
                    description: "Nexus is the most powerful bot on discord. Its 100% free with no ads etc. Lets make paid bots useless.",
                    footer: "NEXUS"
                },
                graph: {
                    enabled: true,
                    lineGraph: false,
                    title: 'Memory Usage',
                    tag: 'Memory (MB)',
                    max: 100
                },
                
            },
            footer: {
                replaceDefault: true,
                text: "Made by Nexus Development"
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "you have been logged in!",
                }
            },
            preloader: {
                image: "https://cdn.discordapp.com/attachments/1112743789782638602/1147938332307898418/discord-avatar-512-E9R4D.gif",
                spinner: false,
                text: "Loading page...",
            },
            admin: {
                pterodactyl: {
                    enabled: false,
                    apiKey: "apiKey",
                    panelLink: "https://panel.website.com",
                    serverUUIDs: []
                },
            },
            commands: [
                moderation,
                community,
                leveling,
                warnsys,
                ecosys,
                mail, 
                sys,
                nsfw,
                other,
            ]}),
            settings: [
                welcomeSetup,
                logsSetup
            ],
    });
    Dashboard.init();
})();

