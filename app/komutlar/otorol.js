const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client,message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin** `Rolleri Yönet`')

  if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription('> **Artox / Otorol Sistemi / Yanlış Kullanım** <a:savehayr:769856528160653312> \n> `!otorol ayarla @rol #kanal` **Otorol Sistemini Ayarlar.** \n> `!otorol sıfırla` **Otorol Sistemini Sıfırlar.**'))

  if(args[0] === "ayarla") {

    var rol = message.mentions.roles.first()   
     var rolkanal = message.mentions.channels.first()
    if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription('**Bir Rol Etiketlemelisin!** `s!otorol ayarla @rol #kanal` **(Eğer Rolü Bulamıyorsan Etiketleme İzninin Açık Olduğundan veya Komutun Kullanıldığı Kanalı Görebildiğinden Emin Ol!)**'))
    if(!rolkanal) return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription('**Bir Kanal Etiketlemelisin Eğer Kanalı Etiketleyemiyorsan BOTun o Kanalı Gördüğünden Emin Ol!**'))
 
    db.set(`autoRoleChannel_${message.guild.id}`, rolkanal.id)
    db.set(`autoRole_${message.guild.id}`, rol.id)
  
    return message.channel.send(new Discord.MessageEmbed().setColor('0x36393E').setDescription('> **Otorol Sistemi Aktif Edildi!** <a:evet:769856510196580352> \n> **Sunucuya Giren Kişilere Verilecek Rol** <@&' + rol + '> \n> **Otorol Mesajının Gideceği Kanal** <#' +rolkanal.id+ '> **Olarak Ayarlandı.**'))
  }
  
  if(args[0] === "sıfırla") {
    let user = message.author
    message.channel.send('**Otorol Sistemini Sıfırlamak İstediğinden Eminmisin Eğer Eminsen** :white_check_mark: **değilsen** :x: **Tepkisine bas.**').then(async m => {
      await m.react('✅').then(r => {
        let onay = (reaction, user) => reaction.emoji.name === '✅' && user.id == message.author.id;
        let onay2 = m.createReactionCollector(onay)
        onay2.on('collect', async(r)=>{
          db.delete(`autoRoleChannel_${message.guild.id}`)
          db.delete(`autoRole_${message.guild.id}`)
          m.reactions.removeAll()
          m.edit('Otorol Sistemi Kapatıldı.')
        })
      })
      await m.react('❌').then(r => {
         let onay = (reaction, user) => reaction.emoji.name == '❌' && user.id == message.author.id;
         let onay2 = m.createReactionCollector(onay)
         onay2.on('collect', async(r)=> {
           m.reactions.removeAll()
           m.edit('Otorol Kapatma İşlemi İptal Edildi')
         })
      })
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol"],
  permlevel: 0
}

exports.help = {
  name: "otorol"
}