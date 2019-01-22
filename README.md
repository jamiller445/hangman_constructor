## hangman_constructor

### Hangman game using constructor functions.

* Letter constructor function located in the file named letter.js.
* Word constructor function located in the file named word.js.  Depends on the constructor function in letter.js
* index.js file contains logic for game and depends on the Word constructor in words.js, the Letter
  constructor in letter.js, the npm inquirer and colors packages.


### Game Operation

To start game run the index.js file from the terminal command line - **node index.js**.  
The index.js progam will randomly selects a word from this list of words stored as an array in the index.js file -

["html", "css", "bootstrap", "javascript", "jquery", "firebase", "recursion", "function", "class", "w3schools"]

The word selected from the array will be represented with a place holder underscore character and the player will
be prompted to guess a letter of the word by typing the letter on the keyboard and the Enter key.  If the guess
is correct a message will appear stating CORRECT, if not correct the message INCORRECT will appear.  The user is 
prompted for each guess and keeps track of the user's remaining guesses.  When all letters in a word are guessed 
correctly a new word is randomly chosen and the game contiues with the new word.


### Screen Shots

**Screen 1**
![](/images/screen1.png)

**Screen 2**
![](/images/screen2.png)

**Screen 3**
![](/images/screen3.png)