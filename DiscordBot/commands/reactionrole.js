
    module.exports = {
        name: 'reactionrole', 
        desc: 'sets up a reaction role message!', 
        async execute(message, args, client, Discord) {
            const channel = '812299746081243156'; 
            const blueTeamRole = message.guild.roles.cache.find(role => role.name === 'Blue Team'); 
            const orangeTeamRole = message.guild.roles.cache.find(role => role.name === 'Orange Team'); 
        
            const orangeTeamEmoji = '🟧'; 
            const blueTeamEmoji = '🟦'; 
    
            let embed = new Discord.MessageEmbed()
            .setColor('#961a5d')
            .setTitle('choose a team!') 
            .setDescription('choose a team to be on. unreacting will remove you from the team!\n\n'
                + `${orangeTeamEmoji} for ${orangeTeamRole}\n`
                + `${blueTeamEmoji} for ${blueTeamRole}`); 
           
                let messageEmbed = await message.channel.send(embed); 
                messageEmbed.react(orangeTeamEmoji); 
                messageEmbed.react(blueTeamEmoji); 
    
                client.on('messageReactionAdd', async (reaction, user)  => {
                    if (reaction.message.partial) await reaction.message.fetch(); 
                    if (reaction.partial) await reaction.fetch(); 
                    if (user.bot) return; 
                    if (!reaction.message.guild) return; 
            
                    if (reaction.message.channel.id == channel) {
                        if (reaction.emoji.name === orangeTeamEmoji) {
                            await reaction.message.guild.members.cache.get(user.id).roles.add(orangeTeamRole); 
                        }
                            if (reaction.emoji.name === blueTeamEmoji) {
                                await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                            
                    }

                    } else {
                        return; 
                    } 
            
                }); 
                
                client.on('messageReactionRemove', async (reaction, user)  => {
                    if (reaction.message.partial) await reaction.message.fetch(); 
                    if (reaction.partial) await reaction.fetch(); 
                    if (user.bot) return; 
                    if (!reaction.message.guild) return; 
            
                    if (reaction.message.channel.id == channel) {
                        if (reaction.emoji.name === orangeTeamEmoji) {
                            await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeTeamRole); 
                        }
                            if (reaction.emoji.name === blueTeamEmoji) {
                                await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                            
                    }

                    } else {
                        return; 
                    } 
            
                }); 
        }
    
    }

//reminder: this is still not working 100%, when you use the command ">reactionrole" it will send the embed, and it will add the reactions, however it will not add the roles...
//potential fixes 1: "const blueTeamRole = message.guild.roles.cache.find(role => role.name === 'Blue Team');" swap out "Blue Team" with the Blue Team role ID instead
