require("dotenv").config();
const Discord = require("discord.js")
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
//git test
client.on("messageCreate", msg => {
  console.log(`Received message: ${msg.content}`);
  if (msg.content.toLowerCase().startsWith("ping")) {
    console.log("Ping command detected. Replying with pong.");
    msg.reply("pong");
  }
});


client.login(process.env.TOKEN)