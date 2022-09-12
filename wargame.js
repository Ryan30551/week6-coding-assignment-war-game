//week-6-coding-assignment-war game

//we need a deck of 52 cards
//we want to have 2 players in the game
//each player will be dealt 26 cards
//each round, a player plays a single card
//each round, we need logic to compare which card is greater
//we need to keep track of score (every time someone wins round, they get +1 points)
//if they tie, no one is awarded points
//after 26 rounds, we want to determine who is the winner

alert `----Lets Play War!----

The Rules: 
-2 players allowed, and each player receives 13 cards
-Each hand you lay down a random card from your deck. Player who has the higher ranking card wins that round and collects the card.
-Cards start with 'Ace' = 1, all the way up 'King' = 13

Good Luck!`

const suits = ['H', 'S', 'D', 'C'];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let deck = [];

//TO CREATE MAIN DECK

for (let suitCounter =0; suitCounter < 4; suitCounter++) {                           // for loop to view all suits
    console.log("Suit:", suits[suitCounter]);
        for (let ValuesCounter = 0; ValuesCounter < 13; ValuesCounter++) {           //for loop to view all values
        console.log("Value:", values[ValuesCounter]);
            }
        }
    
    for (let suitCounter =0; suitCounter < 4; suitCounter++) {                       //Nested for loop to view deck of cards with all values in one array
       for (let ValuesCounter = 0; ValuesCounter < 13; ValuesCounter++) {         
            console.log("Value:", values[ValuesCounter],);
            deck.push(values[ValuesCounter] + suits[suitCounter]);
       }
    }
    
    console.log(deck);                                                                //View whole deck of cards

function newDeck() {
    console.log('New Deck:', newDeck.deck)
}

//SHUFFLE CARDS FUNCTION//

function shuffleCardDeck() {
    for (let i = deck.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
}

shuffleCardDeck();
console.log('shuffled cards:', deck);

//PLAYER CLASS

class Player {                                                                      //Used to define parameters for players
    constructor(name, deck) {
    this.name = name;
    this.deck = deck;
    this.totalPoints = 0;
}
}

//DEAL CARDS FUNCTION                                                       //Utilizes the slice array method to divide whole deck into two decks

const player1name = 'Ryan';
const player2name = 'Craig';

const player1Deck = deck.slice(0, 26);
const player2Deck = deck.slice(26, 52);

console.log('player 1:'+ player1name, player1Deck);
console.log('player 2:'+ player2name, player2Deck);


//PLAYERS DEAL CARD FUNCTION                                                //Randomizes cards with each refresh of page

let randomCardPlayer1 = player1Deck[Math.floor(Math.random() * player1Deck.length)]; 

console.log(player1name, randomCardPlayer1);                                // prints players name and card they are pulling

let randomCardPlayer2 = player2Deck[Math.floor(Math.random() * player2Deck.length)];
console.log(player2name, randomCardPlayer2);

//COMPARE CARDS FUNCTION//

randomCardPlayer1 = 0;                                     //Could not get this code to perform as intended. This is where I ran into road blocks.
randomCardPlayer2 = 0;
player1score = 0;
player2score = 0;

{for (let i = 0; i < player1Deck.length; i++) {
   
if (player1Deck[randomCardPlayer1] > player2Deck[randomCardPlayer2]) {
    player1score++;

} else if (player2Deck[randomCardPlayer2] > player2Deck[randomCardPlayer1]) {
    player2score++;

} else { }

}
console.log(player1name + player1score);
console.log(player2name + player2score);
}