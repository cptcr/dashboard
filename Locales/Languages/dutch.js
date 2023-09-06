const nl = {
    name: "Dutch",
    index: {
        feeds: ["Huidige gebruikers", "CPU", "Systeemplatform", "Aantal servers"],
        card: {
            image: "https://cdn.discordapp.com/attachments/1121354024222998630/1147492191585972274/image.png",
            category: "Nexus",
            title: "NEXUS - Stel je een gratis Discord-bot voor",
            description:
                "Ontdek de ultieme Discord-botoplossing zonder de noodzaak van prijzige Premium Services - met onze gratis bot boordevol functies! We hebben een uitgebreide set tools samengesteld om de ervaring van uw server te verbeteren en aantrekkelijker te maken voor uw community.",
            footer: "",
        },
        feedsTitle: "Feeds",
        graphTitle: "Grafieken"
    },
    manage: {
        settings: {
            memberCount: "Leden",
            info: {
                info: "Info",
                server: "Server Informatie"
            }
        },
        title: "Jouw servers",
        description: "Beheer jouw servers",  // idk if guilds = servers
    },
    admin: {
        feeds: {
            feedBuilder: "Feed Bouwer",
            feedIcon: "Feed Pictogram",
            feedDescription: "Feed Beschrijving",
            feedColour: "Feed Color", // letting feed stand because translated = voeden = giving food
            colors: {
                pink: "Roos",
                red: "Rood",
                orange: "Orangje",
                green: "Groen",
                gray: "Grijs",
                blue: "Blauw",
                dark: "Donker",
            },
            feedSubmit: "Opslaan",
            feedFeedPreview: "Preview",
            feedPreview: "Voorbeeld",
            feedCurrent: "Feeds",
            feedShowIcons: "Pictogrammen",
        },
        admin: {
            title: "Beheerfuncties",
            adminUpdates: "Controleren op updates",
        },
    },
    guild: {
        home: "Huis",
        settingsCategory: "Instellingen",
        updates: {
            title: "Veranderingen gezien!",
            reset: "Terugstellen",
            save: "Opslaan",
        }
    },
    privacyPolicy: {
        title: "Privacybeleid",
        description: "Privacybeleid en servicevoorwaarden",
        pp: "Volledig privacybeleid"
    },
    partials: {
        sidebar: {
            dash: "Dashboard",
            manage: "Beheer Servers",
            commands: "Opdrachten",
            pp: "Privacybeleid",
            admin: "Admin",
            account: "Account pagina's",
            login: "Aanmelden",
            logout: "Afmelden"
        },
        navbar: {
            home: "Huis",
            pages: {
                manage: "Beheer Servers",
                settings: "Beheer Servers",
                commands: "Opdrachten",
                pp: "Privacybeleid",
                admin: "Admin Paneel",
                error: "Fout",
                credits: "Credits",
                debug: "Debuggen",
                leaderboard: "Klassement",
                profile: "Profiel",
                maintenance: "Onder Onderhoud",
                pages: "Bladzijden",
                dashboard: "Instellingen",
            }
        },
        title: {
            pages: {
                manage: "Beheer Servers",
                settings: "Beheer Servers",
                commands: "Opdrachten",
                pp: "Privacybeleid",
                admin: "Admin",
                error: "Fout",
                credits: "Credits",
                debug: "Debuggen",
                leaderboard: "Klassement",
                profile: "Profiel",
                maintenance: "Onder Onderhoud"
            }
        },
        preloader: {
            text: "Laden..."
        },
        premium: {
            title: "Wil je Premium?",
            description: "Lol we weten niet wat premium is",
            buttonText: "Steun ons werk"
        },
        settings: {
            title: "Siteconfiguratie",
            description: "Configureerbare weergaveopties",
            theme: {
                title: "Thema van de site",
                description: "Maak de site aantrekkelijker voor uw ogen!",
                dark: "Donker",
                light: "Licht",
                auto: "Auto"
            },
            language: {
                title: "Taal van de website",
                description: "Selecteer uw taal"
            }
        }
    }
}

module.exports = nl
