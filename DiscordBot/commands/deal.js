module.exports = {
    name: 'deal',
    description: 'will deal cards',
async execute(Discord, message, client) {
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




//still in progress but it will get a random set of cards everytime 

//to do with this command #1: add a fake economic system so people will have things to gamble. 
//to do with this command #2: get a rule set for poker, and a list of all the hands you can do so if someone is new to poker they can still play. 
//to do with this command #3: make a system for people to actualy play together
//to do with this command #4: after #3, make it so it will randomly get 2 other cards for every player playing (and make sure those cards arent the same as the table or other players) then make it take those cards and private DM it to a player

//there is so much more i have to do with this command but 1-4 should keep you going for the time being. 