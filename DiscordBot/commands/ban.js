module.exports = {
    name: 'ban', 
    desc: 'will ban someone from a server', 
    execute(Discord, message, client){

        if(message.member.roles.cache.has('789644981585444895')){

        const member = message.mentions.users.first(); 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id); 
            memberTarger.ban(); 
            message.channel.send('user has been banned'); 
        } else{
            message.channel.send('you cannot ban that member :(, maybe next time'); 
        }

    } else {
        message.channel.send('you do not have permisions to use this command'); 
    }
}
}

//idk if this is operatinal or not because i havent had the guts to bad someone. :(