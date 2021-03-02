module.exports = {
    name: 'hi',
    permissions: [""], 
    desc: 'this is a formal greeting command', 
    execute(client, message, args, cmd, Discord){
        message.channel.send('hello!'); 
    }
}
//look in the ping.js to see why i added this, it should work