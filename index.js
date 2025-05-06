function guessNumber(){
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Secret Number (for testing):", secretNumber);
    let attempts = 0;

    //for infinit loop and guess
    while (true){
        let rawInput =prompt("Enter your guess (1-100):");

        if(rawInput == null){
            alert("Game cancelled after " + attempts +" tries.");
            return;
        }

        let guess = Number (rawInput);
        if (isNaN(guess) || guess < 1 || guess > 100){
            alert("Please enter a number between 1 and 100.");
            continue;
    }

    attempts++;

    if(guess < secretNumber){
        alert("Too low! Try Again.");
    } else if (guess > secretNumber){
        alert("Too high! Try Again.");
    } else {
        alert("Correct! You got it in" + attempts + " tries");
        break; //if guess is correct,exit loop
    }
}
}

guessNumber();
