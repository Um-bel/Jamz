module.exports = {
    name: 'ping', 
    desc: 'this is a ping command.', 
    execute(client, message, args, Discord){
        message.channel.send('pong!'); 
    }
}

//though usefull for testing out if the bot is working for you, nobody else will use this. 
//you should make a command thats the exact same but instead its ">hi" and the bot will reply, "hello!"