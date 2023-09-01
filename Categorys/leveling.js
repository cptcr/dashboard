const array = {
    category: "Leveling / XP System",
    subTitle: "Our leveling commands",
    categoryId: "leveling",
    hideAlias: false,
    hideDescription: false, 
    hideSidebarItem: false,
    list: [
        {
            commandName: "/xp",
            commandUsage: "Edit the XP per message",
        },
        {
            commandName: "/xp-channel",
            commandDescription: "subcommand",
            commandUsage: "Setup a channel for the XP messages",
            commandAlias: "add",
        },                        {
            commandName: "/xp-channel",
            commandDescription: "subcommand",
            commandUsage: "Remove a channel for the XP messages",
            commandAlias: "remove",
        },
        {
            commandName: "/xp-role",
            commandUsage: "Add/remove role rewards for levels",
        },
        {
            commandName: "/rank",
            commandUsage: "Get a members rank",
        },
        {
            commandName: "/top",
            commandUsage: "Get the XP Leaderboard of this Server",
        },
        {
            commandName: "/xp-user-reset",
            commandUsage: "Reset a users rank and xp",
        },
        {
            commandName: "/xp-server-reset",
            commandUsage: "Reset a servers rank and xp",
        },
        {
            commandName: "/card",
            commandDescription: "subcommand",
            commandUsage: "Edit the bar track color of your default card image",
            commandAlias: "bar-track-color",
        },
        {
            commandName: "/card",
            commandDescription: "subcommand",
            commandUsage: "Edit the level color of your default image",
            commandAlias: "level-color",
        },
        {
            commandName: "/card",
            commandDescription: "subcommand",
            commandUsage: "Edit the rank color of your default card image",
            commandAlias: "rank-color",
        },
        {
            commandName: "/card",
            commandDescription: "subcommand",
            commandUsage: "Reset the rank card to default",
            commandAlias: "reset",
        },
        {
            commandName: "/card",
            commandUsage: "Edit the track color of your default card image",
            commandDescription: "subcommand",
            commandAlias: "track-color",
        },
    ]
};

module.exports = array;