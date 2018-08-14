const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("Alkış 👏👅\n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setImage("https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif")
  .setFooter("©️ 2018 | Fire BOT", "http://www.gifsitesi.com/gif-baglanti/r4Pw7Rb1GdHV/deadpool-alkislama.gif")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Botun pingini gösterir.',
  usage: 'çılgınlık'
};
