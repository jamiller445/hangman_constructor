
 const inquirer = require("inquirer");
 const colors = require("colors");
 const Letter = require("./letter.js");
 const Words = require("./word.js");

 const guess = ["html", "css", "bootstrap", "javascript", "jquery", "firebase", 
                "recursion", "function", "class", "w3schools"];

let resStringSearch = 0;
let randNum = 0;
let wordtoGuess = "";
let numGuessesRemain = "";
let w = {};

    // generate random number between 0 and 10
randNum = Math.floor(Math.random() * 10);
wordtoGuess = guess[randNum];
numGuessesRemain = wordtoGuess.length + 3;
    
w = new Words(wordtoGuess);
console.log("\n" + w.word() + "\n");

function askQuestion() {
       
if ( numGuessesRemain != 0 ) {
    if ( resStringSearch > -1 ) {

        let question = [{
            type: 'input',
            name: 'inLetter',
            message: "  Guess a letter  ",
            validate: function validateLetter(name){
                return name !== '';
            }
          }];
          
        inquirer.prompt(question).then(answer => {
        
        resString = w.guessing(answer.inLetter);
        console.log(resString);

        dispString = resString.replace(/ /g, "");

        numGuessesRemain-- ;
        
        resStringSearch = resString.search(answer.inLetter);
        if ( resStringSearch != -1 ){
            console.log("\nCORRECT!!!\n".green);
            if (dispString === wordtoGuess) {
                console.log("You got it right! Next word!\n");
                randNum = Math.floor(Math.random() * 10);
                wordtoGuess = guess[randNum];
                numGuessesRemain = wordtoGuess.length + 3;
                w = new Words(wordtoGuess);
                console.log("\n" + w.word() + "\n");
                askQuestion();
            }
            } 
            else {
                console.log("\nINCORRECT!!!\n".red +
                "\n" + numGuessesRemain + " guesses remaining!!!\n");
            }

            if ( dispString === wordtoGuess || numGuessesRemain == 0 ){
                console.log("No remaining guesses!!! New word!");
                randNum = Math.floor(Math.random() * 10);
                wordtoGuess = guess[randNum];
                numGuessesRemain = wordtoGuess.length + 3;
                w = new Words(wordtoGuess);
                console.log("\n" + w.word() + "\n");
                askQuestion();
            }

        resStringSearch = resString.search(/_/);

        askQuestion(); 

        });
    } 
    } 
};
askQuestion();
