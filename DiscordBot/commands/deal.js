module.exports = {
    name: 'deal',
    permissions: ["SEND_MESSAGES"], 
    description: 'will deal cards',
async execute(client, message, args, cmd, Discord) {
    cards = ["Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", 
"6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", 
"Jack of Clubs", "Queen of Clubs", "King of Clubs",
"Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", 
"6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", 
"Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
"Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", 
"6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", 
"Jack of Hearts", "Queen of Hearts", "King of Hearts",
"Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", 
"6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", 
"Jack of Spades", "Queen of Spades", "King of Spades"]

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;



  
} 
var cards = getRandom(arr=cards,n=6)

const newEmbed = new Discord.MessageEmbed()
        .setColor('#35654d') //try to make that color more 'pokertabley' 
        .setTitle('The Table:')
        .setDescription('Texas holdem')
        .addFields(
            {name: 'cards', value: cards}
        )
        message.channel.send(newEmbed); 
        }
    }




//dont worry about this command, it's uselless