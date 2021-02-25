module.exports = {
    name: 'hi',
    desc: 'this is a formal greeting command', 
    execute(Discord, message, client){
        message.channel.send('hello!'); 
    }
}
//look in the ping.js to see why i added this