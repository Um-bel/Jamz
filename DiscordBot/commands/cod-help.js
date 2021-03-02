module.exports = {
    name: 'cod-help', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'will tell you all of the call of duty commands', 
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('Call of Duty commands')
        .setDescription('use >suggest if you dont see a COD that you want here')
        .addFields(
            {name: '>mwcheck', value: 'will check the stats of a modern warfare player'}, 
            {name: '>bo4check', value: 'will check the stats of a Black Ops 4 player'}, 
            {name: '>cwcheck', value: 'will check the stats of a cold war player'}, 
)
message.channel.send(newEmbed); 
}}
//this works fine