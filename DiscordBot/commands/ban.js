module.exports = {
    name: 'ban', 
    permissions: ["BAN_MEMBERS"], 
    desc: 'will ban someone from a server', 
    execute(client, message, args, cmd, Discord){


        const member = message.mentions.users.first(); 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id); 
            memberTarger.ban(); 
            message.channel.send('user has been banned'); 
        } else{
            message.channel.send('you cannot ban that member :(, maybe next time'); 
        }

    } 
}

//this should work, how to use >ban @user. you need the ban perm to use