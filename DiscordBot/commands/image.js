var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image', 
    desc: 'will get an image off the internet', 
    async execute(Discord, message, client){

        if(message.member.roles.cache.has('789644981585444895')){
        
        const image_quary = args.join(' '); 
        if(!image_quary) return message.channel.send('please enter a valid image name :)'); 

        const image_results = await google.scrape(image_quary, 1);
        
        message.channel.send('this is what i found off the internet!'); 
        
        message.channel.send(image_results[0].url); 
    } else {
        message.channel.send('you do not have permisions to use this command'); 
    } 
}
}

//this works fine and although it does take a good second for the bot to get the image, i dont think it needs any changes.