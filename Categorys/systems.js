const system = {
    category: "System Commands",
    subTitle: "Our system commands",
    categoryId: "sys",
    hideAlias: false,
    hideDescription: false,
    hideSidebarItem: false,
    list: [
        {
            commandName: "/anti-flagged-words",
            commandUsage: "Anti flagged words system"
        },
        {
            commandName: "/anti-ghostping",
            commandAlias: "setup",
            commandDescription: "subcommand",
            commandUsage: "Setp the anti ghost ping system"
        },
        {
            commandName: "/anti-ghostping",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "Disable the anti ghost ping system in your server"
        },
        {
            commandName: "/anti-ghostping",
            commandDescription: "subcommand",
            commandAlias: "number-reset",
            commandUsage: "Reset a users ghostping numbers"
        },
        {
            commandName: "/anti-link",
            commandDescription: "subcommand",
            commandAlias: "setup",
            commandUsage: "Setup the anti link system to delete all links!"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "check",
            commandDescription: "subcommand",
            commandUsage: "Checks the status of the anti link system"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "Disable the anti link system"
        },
        
        {
            commandName: "/anti-link",
            commandAlias: "edit",
            commandDescription: "subcommand",
            commandUsage: "Edit the anti link permissions"
        },
        {
            commandName: "/anti-mention-spam",
            commandUsage: "Dont Spam Mentions"
        },
        {
            comandName: "/anti-spam",
            commandUsage: "max number of messages in a interval",
        },
        {
            commandName: "/anti-word",
            commandUsage: "delete messages with a specific keyword",
        },
        {
            commandName: "/autoreply-setup",
            commandUsage: "Setup the autoreply in your server",
        },
        {
            commandName: "/autoreply-delete",
            commandUsage: "Delete the autoreply in your server",
        },
        {
            commandName: "/color-hex",
            commandUsage: "Get information about a hex color",
        },
        {
            commandName: "/color-rgb",
            commandUsage: "Get info about a rgb color",
        },
        {
            commandName: "/command-logging",
            commandAlias: "enable",
            commandDescription: "subcommand",
            commandUsage: "Enables logging your used commands (default enabled)",
        },
        {
            commandName: "/command-loggind",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "Disable logging your used commands",
        },
        {
            commandName: "/delete-my-data",
            commandUsage: "This command deletes all your restored data!"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Edits a specified giveaway",
            commandDescription: "subcommand",
            commandAlias: "edit"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Ends specified giveaway",
            commandDescription: "subcommand",
            commandAlias: "end"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Rerolls specified giveaway",
            commandDescription: "subcommand",
            commandAlias: "reroll"
        },
        {
            commandName: "/giveaway",
            commandUsage: "Starts a giveaway with the specified fields",
            commandDescription: "subcommand",
            commandAlias: "start"
        },
        {
            commandName: "/login",
            commandAlias: "login",
            commandDescription: "subcommand",
            commandUsage: "login at your server",
        },
        {
            commandName: "/login",
            commandAlias: "logout",
            commandDescription: "subcommand",
            commandUsage: "logout at your server",
        },
        {
            commandName: "/login",
            commandAlias: "setup",
            commandDescription: "subcommand",
            commandUsage: "setup the login/logout system",
        },
        {
            commandName: "/login",
            commandAlias: "disable",
            commandDescription: "subcommand",
            commandUsage: "disable the login/logout system",
        },
        {
            commandName: "/panel-systems",
            commandUsage: "Enable or disable systems"
        },
        {
            commandName: "/remind",
            commandAlias: "cancel",
            commandDescription: "subcommand",
            commandUsage: "Specified reminder will be cancelled",
        },
        {
            commandName: "/remind",
            commandAlias: "cancel-all",
            commandDescription: "subcommand",
            commandUsage: "Cancels all currently active reminders",
        },
        {
            commandName: "/remind",
            commandAlias: "set",
            commandDescription: "subcommand",
            commandUsage: "Sets up a timer for you",
        },
        {
            commandName: "/stream",
            commandAlias: "delete",
            commandDescription: "subcommand",
            commandUsage: "Deletes a streamplan",
        },
        {
            commandName: "/stream",
            commandAlias: "plan",
            commandDescription: "subcommand",
            commandUsage: "Get a stream plan",
        },
        {
            commandName: "/stream",
            commandAlias: "setup",
            commandDescription: "subcommand",
            commandUsage: "Setup the streamplan",
        },
        {
            commandName: "/template",
            commandAlias: "create",
            commandDescription: "subcommand",
            commandUsage: "Create a template/clone of your server",
        },
        {
            commandName: "/template",
            commandDescription: "subcommand",
            commandAlias: "load",
            commandUsage: "Loads a template. Use with caution...",
        },
        {
            commandName: "/ticket-setup",
            commandUsage: "Sets up the ticket system for the server",
        },
        {
            commandName: "/ticket-disable",
            commandUsage: "Disables the ticket system for the server"
        }
    ]
}

module.exports = system