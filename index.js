// Define Packages
const { Client, GatewayIntentBits } = require('discord.js');
const SoftUI = require('dbd-soft-ui');
const config = require('./config.json');
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

//some imports
const Maintenance = require("./Data/underMaintenance");

//Export modules
module.exports = {
    client
}

//Form Types
const form = require("./exportForms");

//Client

//Errors

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
        useCategorySet: true,
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
            scopes:["bot"],
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
                    return {
                        values: [],
                        graph: {},
                        cards: [],
                    }
                },
            },
            websiteName: "Nexus",
            websiteTitle: "NEXUS - imagine a free discord bot",
            dashboardURL: "http://localhost",
            supporteMail: "toowake@proton.me",
            createdBy: "toowake, jasondev, d3rjust1n",
            icons: {
                favicon: process.env.ICON,
                noGuildIcon: "https://unlimitedworld.de/attachments/discord-mark-blue-png.64362/",
                sidebar: {
                    darkUrl: 'https://assistantscenter.com/img/logo.png',
                    lightUrl: 'https://assistanscenter.com/img/logo.png',
                    hideName: true,
                    borderRadius: true,
                    alignCenter: true
                },
            },
            index: {
                card: {
                    category: "Nexus",
                    title: "NEXUS - imagine a free discord bot",
                    description: "NEXUS Panel",
                    image: "https://cdn.discordapp.com/emojis/1135253226413903955.png?quality=lossless",
                    link: {
                        enabled: true,
                        url: "http://localhost/commands"
                    },
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
                text: "Made by toowake"
            },
            sweetalert: {
                errors: {},
                success: {
                    login: "you have been logged in!",
                }
            },
            preloader: {
                image: "https://wallpapers.com/images/featured/loading-background-nakoa70fbcx0evy9.jpg",
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
            ],
    });
    Dashboard.init();
})();

