const chalk = require('chalk')

var sleep = require('system-sleep')

var readline = require('readline-sync')

var playerName = readline.question("Enter your name\n")

sleep(2*1000)

console.clear()

console.log(chalk.yellowBright("Welcome " + playerName + "!!!"))
console.log(chalk.yellowBright("==============="))

console.log(chalk.yellowBright.underline("\nInstructions\n"))

console.log(chalk.green.dim("> The quiz consists of 3 questions\n> You will be awarded 10 points for each correct answer\n> 5 points will be deducted for every incorrect answer\n"))

var score = 0

// function to check the user answer and award score

function check(question, answer) {

  var playerAnswer = readline.question(question)

  if( playerAnswer.toUpperCase() === answer ) {
    score =score + 10
    console.log(chalk.green.dim("Correct!!!"))
  }
  else {
    score = score - 5
    console.log(chalk.red.dim("Wrong!!!"))
  }
}

// Array of questions

var quizQuestions = [
  {
    question: " Who won the Euro 2020?\n",
    answer: "ITALY"
  },
  {
    question: " Who won the Golden Boot award in Euro 2020?\n",
    answer: "CRISTIANO RONALDO"
  },
  {
    question: " Which stadium hosted the finals of the Euro 2020?\n",
    answer: "WEMBLEY"
  }
]

// loop to run the game

for ( var i=0;i<quizQuestions.length;i++) {
  check(quizQuestions[i].question,quizQuestions[i].answer)
}


// display current player's score

console.log(chalk.magentaBright.bold("\n Your final score is "+ score))


