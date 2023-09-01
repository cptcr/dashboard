const array = {
    category: "Modmail",
    subTitle: "Modmail System",
    categoryId: "modmail",
    hideAlias: false,
    hideDescription: false,
    hideSidebarItem: false,
    list: [
        {
            commandName: "/modmail",
            commandDescription: "subcommand",
            commandAlias: "setup",
            commandUsage: "Sets up your modmail system for you"
        },
        {
            commandName: "/modmail",
            commandDescription: "subcommand",
            commandAlias: "disable",
            commandUsage: "Disables the modmail system for you",
        },
        {
            commandName: "/modmail",
            commandDescription: "subcommand",
            commandAlias: "close",
            commandUsage: "Closes your currently active modmail"
        }
    ]
};

module.exports = array