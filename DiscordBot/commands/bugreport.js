const { execute } = require("./say");

module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    permissions: ["SEND_MESSAGES"], 
    description: 'let users report bugs',
    async execute(client, message, args, cmd, Discord){

        const channel = message.guild.channels.cache.find(channel => channel.name == 'bugreport'); 

        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
        const reportEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        message.channel.send("**Bug report has been sent!**")
    }
}
//this should work, just make sure you have a "bugreport" channel