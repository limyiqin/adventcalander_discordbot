// Import the discord.js module 
const Discord = require('discord.js');  
 
//Import CRON 
var CronJob = require('cron').CronJob; 

// Create an instance of a Discord client 
 const client = new Discord.Client(); 
 

// The token of your bot - https://discordapp.com/developers/applications/me 
const token = '<bot token>'; 

 
// The ready event is vital, it means that your bot will only start reacting to information 
// from Discord _after_ ready is emitted 
client.on('ready', () => { 
  console.log('Advert Bot Running!'); 
}); 

 
// Create an event listener for messages 
client.on('message', message => { 
  // If the message is "ping" 
  if (message.content === '?mhadv ping') { 
    // Send "pong" to the same channel 
    message.channel.send('Pong!'); 
  } 
}); 

 
//for reminding 
var job = new CronJob({ 
  cronTime: '00 00 08 * * 0-6', 
  onTick: function() { 
	client.channels.get('<channel id>').send("It's a new day in Gnawnian Advent Calendar! Time to claim your prize for today!");
  }, 
  start: false, 
  timeZone: 'Asia/Singapore' 
}); 
job.start(); 
 
 
// Log our bot in 
client.login(token); 