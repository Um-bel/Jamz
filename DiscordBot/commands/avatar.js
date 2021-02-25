const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "Displays users avatar",
     async execute (Discord, message, client) {
         const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setFooter(`${user.tag}'s avatar!`)
            .setColor("#961a5d")
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))

         )
         
             }
}

//operatinal 

//this works fine now, i dont think i need to add anything. 
//i added ait in an embed bc it looks better that way. 


