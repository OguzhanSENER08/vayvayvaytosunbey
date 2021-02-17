const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
        
  if(!args[0]) {
    message.channel.send(`Bir Sayı Yazmalısın.`)
    return
  }
  
  if(!sayackanal) {
   message.channel.send(`Sayaç Kanalını Etiketlemelisin.`)
  }
  
  
  if(args[0] === "sıfırla") {
    if(!sayacsayi) {
      message.channel.send(`Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`Sayaç Başarıyla Sıfırlandı.`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(`Bir Sayı Yazmalısın.`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`Sunucudaki Kullanıcı Sayısından (${message.guild.members.size}) Daha Yüksek Bir Değer Girmelisin.`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.id)
  
  message.channel.send(`<a:onay:773522867940753448> **Sayaç** \`${args[0]}\`, \n <a:onay:773522867940753448> **Sayaç kanalı ${sayackanal} olarak ayarlandı.**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}