var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image', 
    permissions: ["SEND_MESSAGES"], 
    desc: 'will get an image off the internet', 
    async execute(client, message, args, cmd, Discord){

        
        const image_quary = args.join(' '); 
        if(!image_quary) return message.channel.send('please enter a valid image name :)'); 

        const image_results = await google.scrape(image_quary, 1);
        
        message.channel.send('this is what i found off the internet!'); 
        
        message.channel.send(image_results[0].url); 
    } 
    } 

//this works fine and although it does take a good second for the bot to get the image, i dont think it needs any changes.