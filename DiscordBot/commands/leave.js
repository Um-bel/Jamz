module.exports = {
    name: 'leave', 
    alias: 'stop, end', 
    desc: 'will make bot leave a vc, if already in one', 
    async execute(message, args, client, Discord){
        const voiceChannel = message.member.voice.channel; 

        if(!voiceChannel) return message.channel.send("im sorry, but you need to be in a voice channel to stop the music."); 
        await voiceChannel.leave(); 
        await message.channel.send('goodbye, see you soon!')

    }
}

//this works fine, however related to it there is one problem with the music commands...
//...theres no ">pause" command. again, by not having a pasue command its limiting the potential of the bot greatly. 
//i wouldnt know how to do the pause command but its either SUPER easy, or SUPER hard. 