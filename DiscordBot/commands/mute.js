module.exports = {
    name: 'mute', 
    desc: 'will mute a player from talking, without removing them from the server', 
    execute(message, args, client, Discord){
        const target = message.mentions.users.first(); 
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Everyone Else'); 
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted'); 

            let memberTarget = message.guild.members.cache.get(target.id); 

            memberTarget.roles.remove(mainRole.id); 
            memberTarget.roles.add('muteRole'); 
            message.channel.send(`@${memberTarget.user.id} has been muted`);
        } else {
            message.channel.send('apologies, i cant find someone under that name :/'); 
        }
    }
}

//not operatinal

//change the "let mainRole = message.guild.roles.cache.find(role => role.name === 'Everyone Else');" to the Everyone Else role ID, and do the same for the "muted" role. 

//i dont think that is even necacary because when i was in main.js i saw that instead of saying 'mute' i said ' mute' and i think that's what broke it. 