const mineflayer = require('mineflayer');
const mcData = require('minecraft-data')('1.18');

const bot = mineflayer.createBot({
  host: 'localhost', // replace with server IP
  port: 25565,
  username: 'Bot',
  version: '1.18'
});

bot.on('spawn', () => {
  console.log('Bot spawned!');
});

bot.on('chat', (username, message) => {
  if(username !== bot.username) {
    console.log(`<${username}> ${message}`);
    if(message === 'hello') bot.chat('Hi there!');
  }
});
