// Import the discord.js module
const Discord = require('discord.js');

//Import CRON
var CronJob = require('cron').CronJob;


// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'a?ping') {
    // Send "pong" to the same channel
    message.channel.send('Pong!');
  }
});

//for reminding
var job = new CronJob({
  cronTime: '00 00 08 * * 1-7',
  onTick: function() {
  	var channel = client.servers.get("bot-test", "Chio Bu's Lair").defaultChannel;
	client.sendMessage(channel, "Hello World");
  },
  start: false,
  timeZone: 'America/Los_Angeles'
});
job.start();

// Log our bot in
client.login(token);