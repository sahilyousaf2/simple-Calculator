#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.magentaBright.bold('\n \t Welcome To codeWithSahil - Cli Calculator Applicaation \n'));

let condition = true ;
while(condition) {
const answer = await inquirer.prompt([
    {
        message: chalk.greenBright.italic("Enter first number"),
        type: "number", 
        name: "firstNumber"
    },
    {
        message:chalk.greenBright.italic("Enter second number"), 
        type: "number", 
        name: "secondNumber"
    },
    {
        message: chalk.blueBright.bold("selcet one of the operator to perform action"),
        type: "list",
        name: "operator",
        choices:[
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulues",
            "Exponentiation"
        ]
    }

]);
if (answer.operator === "Addition") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber + answer.secondNumber));


}
else if (answer.operator === "Subtraction") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber - answer.secondNumber));


}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber * answer.secondNumber));


}
else if (answer.operator === "Division") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber / answer.secondNumber));


}
else if (answer.operator === "Modulues") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber % answer.secondNumber));


}
else if (answer.operator === "Exponentiation") {
    console.log(chalk.yellowBright("Your Value Is :", answer.firstNumber ** answer.secondNumber));


}

else {
    console.log(chalk.red.bold("Error"));

};
let conditionAns=await inquirer.prompt([
    {
        name:'restart',
        type:'confirm',
        message:chalk.blueBright('Do you want to continue?'),
        default:false
    }
]);
condition=conditionAns.restart;

}
