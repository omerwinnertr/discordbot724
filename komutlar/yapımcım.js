const Discord = require('discord.js');
exports.run = function(client, message, args) {
    message.channel.send({embed: {
        color: 3447003,
        description: "👑 **Yapımcım**\n\n\n **AhmetBey** "
      }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'yappp.',
  usage: 'yapımcım'
};
