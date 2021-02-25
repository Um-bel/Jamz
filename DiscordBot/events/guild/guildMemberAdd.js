const profileModel = require('../../models/profileSchema'); 

module.exports = async (message, args, client, Discord) => {
    let profile = await profileModel.create({
        userID: member.id, 
        serverID: member.guild.id, 
        Chips: 100, 
        bank: 0, 
    }); 
    profile.save(); 
}