//create an array of words
var words = [
    "earth",
    "mars",
    "jupiter",
    "uranus"
];

//selecting a random word
var word = words[Math.floor(Math.random() * words.length)];

//setting up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

//game loop
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
  
    var guess = prompt("guess a letter, or click cancel");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("please enter a single letter");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("great! your word is " + word);