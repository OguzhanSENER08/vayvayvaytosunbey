const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("Artox | Moderasyon Menüsü")
.setTimestamp()
.setDescription (` • | **${ayarlar.prefix}ban** : Sunucudan Herhangi Birisini Yasaklarsınız.\n • | **${ayarlar.prefix}kick** : Sunucudan Herhangi Birisini Atarsınız.\n • | **${ayarlar.prefix}forceban** : Sunucudan ID BAN Atarsınız.\n • | **${ayarlar.prefix}unban** : Sunucudan Yasaklı Olan Bir Kişinin Yasağını Kaldırırsınız.\n • | **${ayarlar.prefix}slowmode** : Kanalın Hızını Ayarlarsınız.\n • | **${ayarlar.prefix}temizle** :Belirli Bir Sayıda Mesajları Silersiniz.\n • | **${ayarlar.prefix}rol-ver** : Herhangi Gibi Bir Kullanıcıya Rol Verirsiniz.\n • | **${ayarlar.prefix}rol-al** : Herhangi Gibi Bir Kullanıcıdan Rol Alırsınız.\n • | **${ayarlar.prefix}otorol** : Sunucuya Otorol Ayarlar Yeni Kullanıcılara Otorol Verir.\n • | **${ayarlar.prefix}sayaç** : Sunucuya Sayaç Ayarlar Kaç Kişi Olduğunu Gösderir.\n • | **${ayarlar.prefix}temizle-üye** : Herhangi Gibi Bir Kullanıcının Mesajını Silersiniz.`)
.addField(`» Linkler`, `[Artox](https://discord.com/oauth2/authorize?client_id=746336350378262578&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BgVZmxjmF3) **|** [ArtoxMC](https://discord.com/oauth2/authorize?client_id=786825073410572368&permissions=8&scope=bot)`)       
.setFooter(`Artox | Discord.js Sürümü : v12.2.0 | Varsayılan Prefix : !`, client.user.avatarURL)
.setImage(`https://cdn.discordapp.com/attachments/789482584576884776/811515229207789568/350kb.gif`)
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["mod","moderasyon","yetkili","yetkılı","moderasyon-bilgi"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Moderasyon Menüsü.',
   usage:'yardım'
}