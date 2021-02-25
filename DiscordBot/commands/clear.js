module.exports = {
    name: 'clear', 
    desc: 'will deleate a number of messages in a text channel', 
    async execute(Discord, message, client) {

        if(message.member.roles.cache.has('789644981585444895')){

        if(!args[0]) return message.send("you need to at least delete one message to use this command :)"); 
        if(isNaN(args[0])) return message.send('please put in a real number :)'); 

        if(args[0] > 100) return message.send("you cant clear more then 100, otherwise it will crash the bot :("); 
        if(args[0] < 1) return message.send("you need to at least delete one message to use this command :)"); 

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages); 
            }); 
        } else {
            message.channel.send('you do not have permisions to use this command'); 
        }
    }
}

//this works fine, but with how stupid my friends are sometimes you have to delete more then 100 messages. 
//maybe integrate math into it so if you say smt like ">clear 100x2" it will actualy get rid of 200 messages. but that isnt neccecary because most people have sane friends. 