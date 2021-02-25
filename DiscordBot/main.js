const Discord = require('discord.js');
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]}); 

// mongoose.connect(process.env.MONGODB_SRV, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(()=>{
//     console.log('connected to database')
// }).catch((err) =>{
//     console.log(err); 
// }); 

client.commands = new Discord.Collection(); 
client.events = new Discord.Collection(); 

['commandHandler', 'eventHandler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord); 
})

//integrate this sometime the commands bellow sometime 
// client.on('guildMemberAdd', guildMember =>{
//     let welcomeRole = guildMember. guild.roles.cache.find(role => role.name === 'Everyone Else'); 

//     guildMember.roles.add(welcomeRole); 
//     guildMember.guild.channels.cache.get('789639909740511232').send(`welcome <@${guildMember.user.id}> to the server! read the rules to make sure you know what your doing, then have fun and stay a while!`)
// }); 


client.login(process.env.TOKEN); 