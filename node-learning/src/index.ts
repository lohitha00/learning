import readline, { createInterface } from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter the first number: ", (number1) => {
  rl.question("enter the second number: ", (number2) => {
    addNumbersQuestion(number1, number2);
    // rl.question(
    //   "do you want to add two numbers? (+) or do you want to subtract numbers? (-)",
    //   (answer) => {
    //     if (answer.toLowerCase() === "+") {
    //       console.log(parseInt(number1) + parseInt(number2));
    //       rl.close();
    //     } else if (answer.toLowerCase() === "-") {
    //       console.log(parseInt(number1) - parseInt(number2));
    //       rl.close();
    //     } else {
    //       console.log("not valid");
    //     }
    //   }
    // );
  });
});

function addNumbersQuestion(number1: string, number2: string) {
  rl.question(
    "do you want to add two numbers? (+) or do you want to subtract numbers? (-)",
    (answer) => {
      if (answer.toLowerCase() === "+") {
        console.log(parseInt(number1) + parseInt(number2));
        rl.close();
      } else if (answer.toLowerCase() === "-") {
        console.log(parseInt(number1) - parseInt(number2));
        rl.close();
      } else {
        console.log("not valid");
        addNumbersQuestion(number1, number2);
      }
    }
  );
}

// rl.question("enter the first number: ", (number) => {
//   console.log(number);

//   rl.question("what is your name - ", (name) => {
//     console.log(name);
//   });
// });
