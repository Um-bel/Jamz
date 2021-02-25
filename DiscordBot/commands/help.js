module.exports = {
    name: 'help', 
    desc: 'this will tell you the commands the bot has to offer', 
    execute(Discord, message, client) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#961a5d')
        .setTitle('Commands, ">" is the prefix')
        .setDescription('these are the commands the bot has to offer')
        .addFields(
            {name: 'ping', value: 'will show the bots ping'}, 
            {name: 'hi', value: 'just a formal greeting'}, 
            {name: 'play', value: 'will play music'}, 
            {name: 'leave', value: 'will leave a vc'}, 
            {name: 'slowmode', value: 'will enable slowmode'},
            {name: 'weather', value: 'will tell you the weather in your area' }, 
            {name: 'avatar', value: 'will get/zoom in on someones profile picture'}, 
            {name: 'clear', value: 'will mass-delete messages (wont delete if it was upto 14 days ago, thats just how discord works)'}, 
            {name: 'kick', value: 'will kick a player from the server'}, 
            {name: 'ban', value: 'will ban someone from the server'}, 
            //{name: 'mute', value: 'will prevent someone form talking, without removing them from the server.'}, 
            {name: 'reaction role', value: 'will assign teams (yay segrigation!!)'}, 
            {name: 'image', value: 'will get an image off the internet for you'}, 
            

        )
        message.channel.send(newEmbed); 

    }
}
    


//this probably wont work if, it dosnt, log here:

//fail 1: dosnt recognise ".newColor" as a command. i wonnder if it dosnt regonise .setTitle or .setDesc either. 

//fail 2: it didnt recognise ".setColor" as a command however... 
//fail 2 continued: it did regonise the rest of them as a command and worked proporly. i wonder if this is because i used an invalid hex color.

//attemt 3: the hex color was not the problem, i tried a different one and got the same result, i dont know what im doing wrong...

//attemt 4: i have found out the problem, i had typed ".newColor" instead of ".setColor", i will try ".setColor" with the original hex color and see if it works. 

//attemt 5: it has operated 100% correctly with the exact hex color i wanted it to... amazing. 



//appart from the fails this is working fine now, though just remember to add the commands you make here. otherwise they're going to go underappreciated. 