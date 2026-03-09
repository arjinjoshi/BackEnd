import { type StudentData, type StudentDataRequest, type StudentDataUpdate } from "../Interfaces/studentTracker";
import { readFile } from "node:fs/promises";

import path from "node:path";

export const studentDataPath = path.join(__dirname, "/../../database/students.json");

export let students: StudentData[] = [] ;

let isLoaded = false;

export const getStudentData = async (): Promise<StudentData[]> => {
    // if already data present, returns it immediately
    if(isLoaded) return students;

    try{
        const response = await readFile(studentDataPath, "utf-8");
        const parsedData:StudentData[] = JSON.parse(response);
        students = parsedData.length > 0 ? parsedData : []; // if file is empty

    }catch(err){
        students = [];// if file doesn't exists or parse fails then
    }
    isLoaded = true;
    return students;
}