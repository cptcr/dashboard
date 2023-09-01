const array = {
    category: "Moderation",
    subTitle: "Our moderation commands",
    categoryId: "moderation",
    hideAlias: true,
    hideDescription: true, 
    hideSidebarItem: false,
    list: [
        {
            commandName: "/add-role",
            commandUsage: "Adds a role to a member."
        },
        {
            commandName: "/affiliate-check",
            commandUsage: "Check if a Link is affiliate"
        },
        {
            commandName: "/clear",
            commandUsage: "Clear a channels messages"
        },
        {
            commandName: "/lock",
            commandUsage: "Lock a channel"
        },
        {
            commandName: "/membercount-graph",
            commandUsage: "Shows the number of members on the server."
        },
        {
            commandName: "/mod-panel",
            commandUsage: "Moderate a user with this panel"
        },
        {
            commandName: "/send-msg-webhook",
            commandUsage: "Create a webhook"
        },
        {
            commandName: "/steal",
            commandUsage: "Adds a given emoji to the server"
        },
        {
            commandName: "/unban",
            commandUsage: "Unban a user"
        },
        {
            commandName: "/unlock",
            commandUsage: "Unlock a channel"
        },
        {
            commandName: "/reactionrole",
            commandUsage: "Create reactionroles in your server"
        }
    ]
};

module.exports = array;