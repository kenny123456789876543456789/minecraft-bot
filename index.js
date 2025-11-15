// Debug startup: check current folder and files
const fs = require('fs');
console.log('=== Debug: Container Startup ===');
console.log('Current working directory:', process.cwd());

try {
    const files = fs.readdirSync('.');
    console.log('Files in root folder:', files);
} catch (err) {
    console.error('Error reading current folder:', err);
}
console.log('=== End Debug ===\n');

const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple homepage for Railway HTTPS
app.get('/', (req, res) => {
  res.send('<h1>Minecraft Bot Running!</h1><p>Check Node logs for bot activity.</p>');
});

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));

// Create the bot
const bot = mineflayer.createBot({
  host: 'play.hypixel.net', // replace with your server
  port: 25565,
  username: 'Bot',
  version: '1.18'
});

bot.on('spawn', () => console.log('Bot spawned!'));
bot.on('chat', (username, message) => {
  if (username !== bot.username) console.log(`<${username}> ${message}`);
});
bot.on('error', err => console.error(err));
bot.on('end', () => console.log('Bot disconnected.'));

