import chalk from "chalk";
import { writeFile, readFile, mkdir } from "node:fs/promises";

interface DatasType {
    value1?: number;
    value2?: number;
    operation?: string;
    error?:null | string;
    result?: string;
}


export const operationToBePerformed = (operation:string, value1:number, value2:number,error:string | null = null):void=>{
    (async () => { 
            let result ;
            await mkdir("output", { recursive: true });
            const newDate = new Date().toISOString();
            
            let data:DatasType = {
                value1: value1,
                value2: value2,
                operation: operation,
                error: error
            }
            if(error!==null){
                data.error = "Please enter a valid number";
                const outputFilePath = __dirname + `/../output/${error}${newDate}.json`;
                await writeFile(outputFilePath, JSON.stringify(data, null, 2), "utf-8");
                const response = await readFile(outputFilePath, "utf-8");
                const parsedData: DatasType = JSON.parse(response);
                console.log(chalk.red(parsedData.error));
                return;
            }

            switch(operation){
                case 'add':
                    result = `Sum of ${value1} and ${value2} is ${value1 + value2}.`;
                    break;

                case 'subtract': 
                    result = `Difference of ${value1} and ${value2} is ${value1 - value2}.`;
                    break;
                case 'multiply':
                    result = `Multiply of ${value1} and ${value2} is ${value1 * value2}.`
                    break;
                case 'division': 
                if(value2 !== 0){
                        result = `Division of ${value1} and ${value2} is ${Number((value1/value2).toFixed(2))}.`
                    }else {
                        result = `Division cannot be performed because value2 is ${value2}.`;
                        error = `ERROR_invalid_division`
                        break;
                    }
                default :
                    result = `Please enter valid operation.`
                    error = `ERROR_invalid_operation`
                    break;
            }
            if(error!==null){
                data.error = error;
                const outputFilePath = __dirname + `/../output/${error}${newDate}.json`;
                await writeFile(outputFilePath, JSON.stringify(data, null, 2), "utf-8");
                const response = await readFile(outputFilePath, "utf-8");
                const parsedData: DatasType = JSON.parse(response);
                console.log(chalk.red(parsedData.error));
                return;
            }else{

                data = {
                    value1: value1,
                    value2: value2,
                    operation: operation,
                    result: result
                }
                const outputFilePath = __dirname + `/../output/${operation}${newDate}.json`;
                await writeFile(outputFilePath, JSON.stringify(data, null, 2), "utf-8");
                const response = await readFile(outputFilePath, "utf-8");
                const parsedData: DatasType = JSON.parse(response);
                console.log(chalk.green(parsedData.result));
                return;
            }
    })();
}



