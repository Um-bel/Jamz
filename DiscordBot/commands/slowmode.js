const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    description: 'Sets SlowMode for a Channel',
async execute(message, args, client, Discord){
    if(message.member.roles.cache.has('789644981585444895')){
    if (!args[0]) return message.channel.send('Invalid Args: What do you want the slowmode to be set to?'); 
    if(isNaN(args[0])) return message.channel.send('Please type a real number!');
    if (args[0] > 21600 || args[0] < 1) return message.channel.send('Number must be between 1 - 21600')

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(`Slow Mode set to ${args[0]}`)
        return;

    message.channel.send(`Slow Mode set to ${args[0]}`)

    .catch((e) => {
        message.channel.send('Error Occured!')
        e ? console.error(e) : console.log('Uknown Error')
    })
} else {
    message.channel.send('you do not have permisions to use this command'); 
}
}
}

//reminder: this still isnt 100% operatinal. if you enable slowmode, then try to dissable it, you cant because of the min limit of 1 second.
//potential fixes 1: make the 1 - 21600 seconds min/max, to 0 - 21600 seconds min/max where if the user says "0" it will not make the slowmode 0 seconds, but dissable slowmode. 
//potential fixes 2: make a new command compleatly seperate from this one, thats ">dissable slowmode" and it will simply dissable slowmode. 