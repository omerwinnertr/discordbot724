const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlarımı DM Olarak Attım ! Özel Mesajlarını Kontrol Et :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setTitle("Botumuzun Komutları")
    .setAuthor("**Avatar | Bütün hakları okunmuş ve gizlidir.**", "")
    .setColor("RANDOM")
    .addField("**Eğlence ve Kullanıcı Komutları:**", `w!banned • Dene ve Gör!  \nw!avatarım • Avatarınınızı Gösterir. \nw!söv • Etikletlediğinize Söver. \nw!troll • Troll Gifi Atar \nw!uç • Uçan Tekme Atar \nw!atatürk • Şanlı Atatürk'ün Resmini Atar \nw!yala • Dondurma Yalar \nw!sigara • Sigara İçer. \nw!herkesebendençay • Herkese Çay Alırsınız. \nw!şanslısayım • Şans Sayınızı Gösterir. \nw!hd • NSFW bir resim gösterir.(+18) \nw!koş • Koşarsınız. \nw!espri • BOT Espri Yapar. \nw!çayiç • Çay İçersiniz. \nw!çekiç • İstediğiniz Kişiye Çekiç Atarsınız. \nw!çayaşekerat • Çaya Şeker Atarsınız. \nw!yumruh-at • Yumruk Atarsınız. \nw!say • Bota İstediğiniz Şeyi Yazdırırsınız. \nw!sunucuresmi • BOT Sunucunun Resmini Atar. \nw!sunucubilgi • BOT Sunucu Hakkında Bilgi Verir. \nw!bulanık • Etiketlediğiniz Kişinin Avatarını  Bulanıklaştırır `)
    .addField("**Yetkili Komutlar**", `w!ban • İstediğiniz Kişiyi Sunucudan Banlar.\nw!temizle • Mesajları Temizler \nw!kilit • chat kapatır!. \nw!uyar • Isdedginiz Kisiyi Uyarir \nw!kick • İstediğiniz Kişiyi Sunucudan Atar. \nw!unban • İstediğiniz Kişinin Yasağını Açar. \nw!sustur • İstediğiniz Kişiyi Susturur. \nw!oylama • Oylama Açar. \nw!duyuru • Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana ve Kullanıcı Komutları**", "w!yardım • BOT Komutlarını Atar. \nw!bilgim • Bilgilerinizi Gösterir \nw!tavsiye • BOTa tavsiye verirsiniz. \nw!bilgi • BOT Kendisi Hakkında Bilgi Verir. \nw!ping • BOT Gecikme Süresini Söyler. \nw!davet • BOT Davet Linkini Atar. \nw!istatistik • BOT İstatistiklerini Atar.")
    .addField("**Müzik Komutları**", `Yakında Eklenicek Takipte Kalın :ballot_box_with_check: `)
    .addField("**Yapımcı**", " **iÖmqR WinnerFX [ROAD TO 1.5K]#9260**")
    .setFooter('**--------------------------**')
    .setFooter("")
    .setThumbnail("")
    .setTimestamp()
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun komutlarını gösterir',
  usage: 'yardım'
};
