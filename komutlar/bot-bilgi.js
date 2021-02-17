const  Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Artox / BOT İstatistikleri;')
    .addField('Artox / Ana Geliştiriciler:','<@486899085337427969>,')
    .addField('Artox / BOT PİNGi:', client.ws.ping + 'ms')
    .addField('Artox / BOT Çalışma Süresi: ', `${duration}`)
    .addField('Artox / BOT Kullanıcı Sayısı:', client.users.cache.size)
    .addField('Artox / BOT Kanal Sayısı:', client.channels.cache.size)
    .addField('Artox / BOT Sunucular:', client.guilds.cache.size)
    .addField('Artox / BOT RAM Kullanımı:', (process.memoryUsage().heapUsed  / 2048 / 2048).toFixed(2))
    .addField("Artox / BOT BİT:", `\`${os.arch()}\``, true)
    .addField("Artox / İşletim Sistemi:", `\`\`${os.platform()}\`\``, true)
    .addField("Artox / BOT CPU:",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi','i'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};