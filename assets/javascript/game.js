// variables //

    var wins = 0;

    var Attempts = 12;

    var wordslist = ["mario", "sonic", "tetris", "pokemon", "minecraft", "fortnite", "overwatch"]
    var chosenWord;
    var guesses =[];

    var space;
    var totalspace;

    // Start
    function startGame() {

        Attempts = 12;

        chosenWord = wordslist[Math.floor(Math.random() * wordslist.length)];

        space = chosenWord.length;

        console.log(chosenWord);
        console.log(space);

        totalspace = [];

        guesses = [];

        for (var i=0; i < space; i++) {
            totalspace.push("_");
        }
        console.log(totalspace);

        // setting html to starting conditions
        document.getElementById("guesses-left").innerHTML = Attempts;
        document.getElementById("word-display").innerHTML = totalspace.join(" ");
        document.getElementById("guessed-letters").innerHTML = guesses.join(" ");
    }

    for (var i = 0; i < chosenWord; i++) {
        alert(chosenWord.charAt(i));
    }

    // pressing key //

    startGame();

    document.onkeyup = function(event) {
        var letter = event.key;
        var isInWord = false;

        console.log(letter);

        // checking if letter in word
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord.charAt(i) === letter) {
                isInWord = true;
            }
        }

        if (isInWord == true) {
            for (var j = 0; j < chosenWord.length; j++) {
                if (chosenWord.charAt(j) === letter) {
                    totalspace[j] = letter;
                }
            }
        }

        else {
            guesses.push(letter);
            Attempts--;
        }

        // update conditions of the game
        document.getElementById("guesses-left").innerHTML = Attempts;
        document.getElementById("word-display").innerHTML = totalspace.join(" ");
        document.getElementById("guessed-letters").innerHTML = guesses.join(" ");

        // win or loss
        if (chosenWord === totalspace.join("")) {
            wins++;
            alert("A Winner is You!!!");
            document.getElementById("win-count").innerHTML = wins;
            startGame();
        }

        else if (Attempts === 0) {
            alert("Sorry, Try Again!");
            startGame();
        }
    }
    
    console.log(totalspace);
