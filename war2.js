class Card {
    constructor(suits, rank, value) {               //class that defines the pareameters needed for a card
        this.suits = suits;
        this.rank = rank;
        this.value = value; 
    }
}

class Deck {                                        //class that allows for an empty array to allow for 
    constructor() {
        this.cards = [];
    }

    createDeck() {                                    //function to create a deck within a class 
        let suits = ['♥', '♦', '♣', '♠'];
        let ranks = ['A', '2', '3','4', '5', '6', '7', '8', '9','10','Jack','Queen','King'];
        let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], value[j]));
                
            }
            
        }
    
    }

    shuffleDeck() {                                     //shuffle deck function. Uses a for loop to to determine where cards go. 
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}

class Player {                                          //Player class that creates a name 
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Board {                                           //Board class 
    constructor () {
        this.cardsInMiddleOfBoard = [];
        this.players = [];
        }
        start(playerOneName, playerTwoName) {
            this.players.push(new Player(playerOneName));
            this.players.push(new Player(playerTwoName));
            let d = new Deck ();
            d.createDeck();
            d.shuffleDeck();
            this.players[0].playerCards = d.cards.slice(0, 26);
            this.players[1].playerCards = d.cards.slice(26, 52);
        }
    }
         let gameBoard = new Board();
            gameBoard.start('Ryan', 'John');

            console.log(gameBoard.players);
        