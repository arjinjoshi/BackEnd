import readline from "node:readline/promises";


// // // Either this way 
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

 // Or this way

import {stdin as input, stdout as output} from "process";
import { operationToBePerformed } from "./utilities";
import chalk from "chalk";

const rl = readline.createInterface({
    input, output
});


 

(async ()=> {
    try{
        const answer1 = await rl.question(chalk.green("Input 1st numeric value: "));
        const value1 = parseFloat(answer1);

        const answer2 = await rl.question(chalk.green("Input 2nd numeric value: "));
        const value2 = parseFloat(answer2);

        const operation = await rl.question(chalk.green("Enter a operation: (add, subtract, multiply, division): "));

        (!isNaN(value1) && !isNaN(value2)) ? operationToBePerformed(operation, value1, value2) : operationToBePerformed(operation, value1, value2, "ERROR_invalid_number");
    }catch(e){
        console.log(chalk.red("Error on reading data"));
    }finally{
        rl.close();
    }

})();

