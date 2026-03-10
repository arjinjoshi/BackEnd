
import { StudentDataRequest, StudentDataUpdate } from "../Interfaces/studentTracker";
import StudentDataModel from "../models/student";

interface NotFoundError {
    message: string;
    status: number;
}

export const fetchAll = async (req: any) => {
    const students = await StudentDataModel.find();

    const { gender } = req;

    if(gender) {
        return students.filter(s => s.gender === gender);
    }
    return students;
}

export const createStudent = async (newStudent: StudentDataRequest) => {
    const student = StudentDataModel.create(newStudent);
    
    return student;

}

export const updateStudent = async(updatedStudentInfo: StudentDataUpdate, id: string) => {
    let student ;
    try{
      student = await StudentDataModel.findByIdAndUpdate(id, updatedStudentInfo, { new: true });    
    }catch(err){
        const notFoundError: NotFoundError = {
            message: "Student not found" + err,
            status: 404
        }
        throw notFoundError;
    }
    console.log(student);

    return student;
}


export const deleteStudent = async (id: string) => {
    try{
        await StudentDataModel.findByIdAndDelete(id);
    }catch(err){
        const notFoundError: NotFoundError = {
                    message: "Student not found" + err,
                    status: 404
                }
        throw notFoundError;
    }

   return "Deleted Successfully";
         
    }



export const fetchById = async (id: string) => {
    let student;
    try {
         student = await StudentDataModel.findById(id);
    }catch(err){
        const notFoundError: NotFoundError = {
            message: "Student not found" + err,
            status: 404
        }

        throw notFoundError;
    }

    return student;

}