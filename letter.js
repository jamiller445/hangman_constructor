

function Letter(letterIn){
    this.letterIn = letterIn;
    this.guessed = false;
    this.letterTest = function() {
      if (this.guessed){
        
          return this.letterIn + " ";
      } 
      else {
        
          return "_ ";
      } 
    };
    this.textInput = function(inLetter){
        this.inLetter = inLetter;
        if (this.inLetter === this.letterIn){
            this.guessed = true;
        }
    }
}
module.exports = Letter;

