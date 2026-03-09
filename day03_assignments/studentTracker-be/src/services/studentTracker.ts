import { writeFile } from "node:fs/promises";
import { StudentData, StudentDataRequest, StudentDataUpdate } from "../Interfaces/studentTracker";
import { getStudentData, studentDataPath, students } from "../models/student.model";

interface NotFoundError {
    message: string;
    status: number;
}

export const fetchAll = async (req: any) => {
    await getStudentData();

    const { gender } = req;

    if(gender) {
        return students.filter(s => s.gender === gender);
    }
    return students;
}

export const createStudent = async (newStudent: StudentDataRequest) => {

    await getStudentData();

    const dataToCreate: StudentData = {
        id: crypto.randomUUID(),
        gender: newStudent.gender,
        name: newStudent.name,
        address: newStudent.address,
        phoneNumber: newStudent.phoneNumber}


    students.push(dataToCreate);

    await writeFile(studentDataPath, JSON.stringify(students, null, 2));
    
    return dataToCreate;

}

export const updateStudent = async(updatedStudentInfo: StudentDataUpdate, id: string) => {
    await getStudentData();
    const index = students.findIndex(s => s.id === id);

    console.log(students[index]);
    if(index === -1){
        const notFoundError: NotFoundError = {
            message: "Student not found",
            status: 404
        }

        throw notFoundError;
    }

    students[index] = {...students[index], ...updatedStudentInfo} as StudentData;

    await writeFile(studentDataPath, JSON.stringify(students, null, 2));

    return students[index];

}


export const deleteStudent = async (id: string) => {
    await getStudentData();

    const index = students.findIndex(s => s.id === id);
    if(index === -1) {
        const notFoundError: NotFoundError = {
            message: "Student not found",
            status: 404
        }

        throw notFoundError;
    }

    students.splice(index, 1);
    await writeFile(studentDataPath, JSON.stringify(students, null, 2));

    return "Deleted Successfully";

}


export const fetchById = async (id: string) => {
    await getStudentData();

    const student = students.find(s => s.id === id);

    if(!student) {
        const notFoundError: NotFoundError = {
            message: "Student not found",
            status: 404
        }

        throw notFoundError;
    }

    return student;

}