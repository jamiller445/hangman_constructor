

var Letter = require("./Letter.js");

function Word(targetWord){
    this.targetWord = targetWord;
    this.targetLetter = [];
    this.targetGuessed = false;

    for (var i=0; i < this.targetWord.length; i++){
        this.targetLetter[i] = new Letter(targetWord[i]);
    }

    this.word = function() {
        this.displayWord = [];
        for (var i=0; i<this.targetLetter.length; i++){
            this.displayWord[i] = this.targetLetter[i].letterTest();
            this.res = this.displayWord.join("");
           
        }
        return this.res;
    };
    this.guessing = function(character){
        this.character = character; 
        this.displayWord = [];
        for (var i=0; i<this.targetLetter.length; i++){
            this.targetLetter[i].textInput(this.character);
            if (this.targetLetter[i].guessed){
                targetGuessed = true;
            }
            this.displayWord[i] = this.targetLetter[i].letterTest();
            this.res = this.displayWord.join("");
        }
            return this.res;
    }
    
}
module.exports = Word;