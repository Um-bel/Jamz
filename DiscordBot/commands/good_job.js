module.exports = {
    name: 'good_job',
    desc: 'this is a congradulation commands', 
    execute(Discord, message, client){
        
        if(message.member.roles.cache.has('811666106984038430')){
          message.channel.send('Thanks!')

        } else {
          message.channel.send('you do not have permisions to use this command, let me fix that :)'); 
          message.member.roles.add('811666106984038430'); 
        }


    }
}
// dont ask i felt really proud of my bot when i first made it i decited to add this to congradulate it on its accompleshment. 