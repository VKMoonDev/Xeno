import { Client, GatewayIntentBits, Partials, ActivityType } from 'discord.js';
const XenoClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildEmojisAndStickers
    ],

    partials: [
        Partials.Channel,
        Partials.Message,
        Partials.GuildMember,
        Partials.User,
        Partials.Reaction
    ]
});

import { Config } from './config';

XenoClient.on('ready', async() => {
    console.log(`Now Logged in as ${XenoClient.user?.tag}! | Development Stage`);
    XenoClient.user?.setActivity(`Development Stage. Nothing works yet! | Nex Studios`, { type: ActivityType.Watching });
});

XenoClient.login(Config.token);