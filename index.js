#! usr/bin/env/node
import inquirer from "inquirer";
console.log("Welcome to my CLI Number Guessing Game");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "guessedNumber",
        message: "Enter a number you have guessed(Limit from 1 to 5)"
    }
]);
if (answers.guessedNumber === randomnumber) {
    console.log("Congratulations you Guessed the correct Number!");
}
else if (answers.guessedNumber > randomnumber) {
    console.log("Your guess is too high");
}
else if (answers.guessedNumber < randomnumber) {
    console.log("Your guess is too Low");
}
else
    (answers.guessedNumber != randomnumber);
console.log("The Correct Answer Is " + randomnumber);
