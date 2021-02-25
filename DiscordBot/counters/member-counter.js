module.exports = async (message, args, client, Discord) =>{
    const guild = client.guilds.cache.get('797001071246966784'); 
    setInterval(() =>{ 
        const memberCount = guild.memberCount; 
        const channel = guild.channels.cache.get('813072034275000351'); 
        channel.setName(`total-members: ${memberCount.toLocaleString()}`); 
        console.log('Updating Member Count'); 
    }, 226503.016175); 
}

//this also works fine, but not on al serers. also 5 mins is not a lot of time, maybe try 10 mins? or just deactivate it because of how little people come and go in that server. 