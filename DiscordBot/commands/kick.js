module.exports = {
    name: 'kick', 
    permissions: ["KICK_MEMBERS"], 
    desc: 'will kick someone from a server', 
    execute(client, message, args, cmd, Discord){

        const member = message.mentions.users.first(); 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id); 
            memberTarger.kick(); 
            message.channel.send('user has been kicked'); 
        } else{
            message.channel.send('you cannot kick that member :(, maybe next time'); 
        }

    } 
}

//this works, use it exactly the same way you >ban but instead with >kick @user