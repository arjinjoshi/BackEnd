// console.log("Hello World")

import Module from "node:module"

// // Node Js HTTP module 


// import http from "http";

// const server = http.createServer((req,res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end("Hello World");
// })

// server.listen(3000, ()=> {
//     console.log("Server is runnning in port 3000");
// })





// // Node JS - OS Moddule


// import os from "os";

// console.log("OS Platform", os.platform());




// // Node JS -File System Module

// import { writeFile, readFile, mkdir} from "node:fs/promises";
// import { stringify } from "node:querystring";

// const createHelloWorld = async () => {
//     await mkdir("output", {recursive: true});
// }

// interface ParsedData{
//     name: string;
//     age: string;
// }

// interface UpdatedGyanas extends ParsedData{
//     address: string;
// }

// const readFileData = async() => {

//     console.log("Current File Path", __filename);

//     const filePath = __dirname + "/../output/gyanas.json";

//     const data = await readFile(filePath, 'utf-8');
//     const parsedData:ParsedData[] = JSON.parse(data);
//     const firstElement = parsedData[0];
//     console.log(firstElement);

//     let updatedData : UpdatedGyanas | undefined = undefined;

  
//         updatedData = {
//         name: firstElement?.name ?? "",
//         age: firstElement?.age ?? "",
//         address: "Sinamangal Bato"
//     }



//     const outputFilePath = __dirname + "/../output/gyanas-updated.json";
//     await writeFile(outputFilePath,JSON.stringify(updatedData,null,2), 'utf-8')
// }

// readFileData();


// NODE JS - ReadLine Module

import readline from "readline/promises";
import { formatOutput } from "./utils";

const readNumberFunc = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const answer = await rl.question("Enter a number");
    // console.log("You entered:", answer);


    // Created a module for it 
    formatOutput(answer);
    rl.close();
}

readNumberFunc();