const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    permissions: ["SEND_MESSAGES"], 
    description: 'get information about a minecraft server',
    execute(client, message, args, cmd, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port (try 25565)');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#961a5d')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an unnknown error');
            throw error;
        })
    }
}
//this works, but you need the server port