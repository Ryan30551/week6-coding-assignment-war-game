let Suits = ['♥', '♦', '♣', '♠'];
let Values = ['A', '2', '3','4', '5', '6', '7', '8', '9','10','Jack','Queen','King'];
let deck = [];

for (let suitCounter =0; suitCounter < 4; suitCounter++) {                           // for loop to view all suits
console.log("Suit:", Suits[suitCounter]);

    for (let ValuesCounter = 0; ValuesCounter < 13; ValuesCounter++) {              //for loop to view all values
    console.log("Value:", Values[ValuesCounter]);

    }
}

for (let suitCounter =0; suitCounter < 4; suitCounter++) {        //Nested for loop to view deck of cards with all values in one array
   for (let ValuesCounter = 0; ValuesCounter < 13; ValuesCounter++) {              
        console.log("Value:", Values[ValuesCounter]);
        deck.push(Values[ValuesCounter] + Suits[suitCounter]);
   }
}

console.log(deck);                                          //Used to view whole deck of cards

function shuffleDeck(deck) {                               //Used to shuffle deck. Code utilizes a for loop and re-orders cards in the deck using the "floor" array method. 
for(let i = 0; i < 52; i++) {                                                       
    let tempCard = deck[i]; 
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] =deck[randomIndex]; 
    deck[randomIndex] = tempCard;
    }
}

let newDeck = createDeck();
shuffleDeck(deck);
console.log(deck);



const randomItem = deck => deck.splice((Math.random() * deck.length) | 0, 1);               //Code that can be used to pull a single random item from an array
console.log(randomItem(deck));



