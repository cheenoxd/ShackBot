const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();


  

client.login(config.token);