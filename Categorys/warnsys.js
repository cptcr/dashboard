const array = {
    category: "Warn System",
    subTitle: "Our warn commands",
    categoryId: "warn",
    hideAlias: true,
    hideDescription: true, 
    hideSidebarItem: false,
    list: [
        {
            commandName: "/trollwarn",
            commandUsage: "Trollwarn a user",
        },
        
        {
            commandName: "/clearwarn",
            commandUsage: "This clears a members warnings",
        },
        
        {
            commandName: "/warn",
            commandUsage: "This warns a server member",
        },
        
        {
            commandName: "/warnings",
            commandUsage: "This gets a members warnings",
        },
    ]
};

module.exports = array;