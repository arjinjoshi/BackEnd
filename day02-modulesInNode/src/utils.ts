import chalk from "chalk";

const formatOutput = (answer: string) =>{
    console.log(chalk.green("You entered"), chalk.red(answer));
}

export {formatOutput};