module.exports = {
    name: 'kick', 
    desc: 'will kick someone from a server', 
    execute(Discord, message, client){

        if(message.member.roles.cache.has('789644981585444895')){

        const member = message.mentions.users.first(); 
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id); 
            memberTarger.kick(); 
            message.channel.send('user has been kicked'); 
        } else{
            message.channel.send('you cannot kick that member :(, maybe next time'); 
        }

    } else {
        message.channel.send('you do not have permisions to use this command'); 
    }
}
}
//this works fine and i dont think it needs any changes