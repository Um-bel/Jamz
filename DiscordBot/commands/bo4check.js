require('dotenv').config();
const cod_api = require('call-of-duty-api')();
 
module.exports = {
    name: 'bo4check',
    permissions: ["SEND_MESSAGES"], 
    description: 'this command shows stats for call of duty multiplayer',
    async execute(client, message, args, cmd, Discord){
        if(!args[0]) return message.channel.send('Please enter a username');
        if(!args[1]) return message.channel.send('Please enter a platfrom');
 
        let username = process.env.COD_USERNAME;
        let password = process.env.COD_PASS;
 
        try{
            await cod_api.login(username, password);
            let data = await cod_api.BO4mp(args[0], args[1]);
            
            const embed = new Discord.MessageEmbed()
            .setColor('#961a5d')
            .setTitle('BO4 Multiplayer Stats')
            .setDescription('Black Ops 4 stats')
            .addFields(
                { name: 'Games Played', value: data.lifetime.all.properties.totalGamesPlayed, inline: true},
                { name: 'Wins', value: data.lifetime.all.properties.wins, inline: true},
                { name: 'Losses', value: data.lifetime.all.properties.losses, inline: true},
                { name: 'KD Ratio', value: data.lifetime.all.properties.kdRatio, inline: true},
                { name: 'Kills', value: data.lifetime.all.properties.kills, inline: true},
                { name: 'Deaths', value: data.lifetime.all.properties.deaths, inline: true},
                { name: 'total accuracy', value: data.lifetime.all.properties.accuracy, inline: true}, 
                { name: 'headshots', value: data.lifetime.all.properties.headshots, inline: true}, 
                { name: 'Longest Killstreak', value: data.lifetime.all.properties.recordKillStreak},
                { name: 'Total Time Played', value: (parseFloat(data.lifetime.all.properties.timePlayedTotal / 3600).toFixed(2)) + " Hours"}, 
            
            )
 
            message.channel.send(embed);
 
            console.log(data.lifetime.all.properties);
 
        }catch(error){
            message.channel.send('There was an unknown error');
            throw error;
        }
    }
}
//this is buggy, but should work. 