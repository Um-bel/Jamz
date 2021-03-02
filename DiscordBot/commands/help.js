module.exports = {
    name: 'help', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'this will tell you the commands the bot has to offer', 
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('Commands, ">" is the prefix')
        .setDescription('these are the commands the bot has to offer')
        .addFields(
            {name: 'ping', value: 'will show the bots ping'}, 
            {name: 'hi', value: 'just a formal greeting'}, 
            {name: 'p-help', value: 'will give you commands on how to play music'}, 
            {name: 'slowmode', value: 'will enable slowmode'},
            {name: 'weather', value: 'will tell you the weather in your area' }, 
            {name: 'avatar', value: 'will get/zoom in on someones profile picture'}, 
            {name: 'clear', value: 'will mass-delete messages (wont delete if it was upto 14 days ago, thats just how discord works)'}, 
            {name: 'kick', value: 'will kick a player from the server'}, 
            {name: 'ban', value: 'will ban someone from the server'}, 
            {name: 'mute', value: 'will prevent someone form talking, without removing them from the server.'}, 
            {name: 'unmute', value: 'will unmute someone.'}, 
            {name: 'image', value: 'will get an image off the internet for you'}, 
            {name: 'suggest',  value: 'will allow you to suggest something to the server'}, 
            {name: 'mcserver', value: 'will get info from a minecraft server'},
            {name: 'cod-help', value: 'will give you COD commands (buggy)'}, 
            {name: 'say', value: "say something!"}, 
            {name: "bugreport", value: "report a bug that the bot has"}, 
            {name: 'rps', value: 'will start a game of rock, paper, scissors'}, 
            {name: 'beg', value: 'will beg for coins (VERY new and is still very buggy, use >bugreport to report any bugs)'}, 
            {name: 'balence', value: 'will check how many coins you currently have **this command dosnt work ATM ill update it soon**'}, 
    
        )
        message.channel.send(newEmbed); 

    }
}
    


//this works fine. 
