require('dotenv').config();
const Discord = require('discord.js');
const Bot = new Discord.Client();


var CHANNEL = process.env.TUTORIAL_CHANNEL;

Bot.login(process.env.TUTORIAL_SECRET);

var interval = null;
Bot.on('ready', () => {
    console.log('Bot logged in');
    interval = setInterval(onInterval, 5000);
});

Bot.sendMessage = (content, channel) => (Bot.channels.cache.get(channel ?? CHANNEL) ?? {send: () => null}).send(content);
Bot.on('message', msg => {
    if(msg.content === 'Ping')
        msg.channel.send('Pong');
});

Bot.on('error', err => console.log('Error in bot:\n' + err));

var time = 0;
function onInterval() {
    time += 5;
    if(time === 10)
        Bot.sendMessage('Bot has been running for 10 seconds');
}
