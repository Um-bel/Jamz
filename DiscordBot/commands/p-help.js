module.exports = {
    name: 'p-help', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'this command will tell you the play commands', 
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('>play')
        .setDescription('these are the commands to use >play')
        .addFields(
            {name: 'play', value: 'will play music, there is an automatic quene if you play multiple songs at once'}, 
            {name: 'skip', value: 'will skip to the next song in queue'}, 
            {name: 'stop', value: 'will stop all songs in quene'}, 
)
message.channel.send(newEmbed); 
}}
//this works fine