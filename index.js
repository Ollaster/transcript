require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", ()=>console.log("READY"));
//load the transcript module
const transcript = require("./transcript")
transcript(client, process.env.prefix + "transcript", 500)  
//transcript(client, "CMD", "MAXIMUM msgs") //minimum = 100 

client.login(process.env.BOT_TOKEN)
