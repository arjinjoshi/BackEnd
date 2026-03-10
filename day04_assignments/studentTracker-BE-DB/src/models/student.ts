import mongoose from "mongoose";
import { genderCategory, StudentDataRequest } from "../Interfaces/studentTracker";


// interface IStudentData extends Document {
//     gender: genderCategory;
//     name: string;
//     address: string;
//     phoneNumber: string;
// }


export interface IStudentData extends StudentDataRequest, Document{}

const Genders: genderCategory[] = ["Male", "Female", "Non-Binary"];

const StudentDataSchema = new mongoose.Schema<IStudentData>({
    name: { type: String, required: true },
    address: { type: String, required: true }, 
    phoneNumber: { type: String, required: true },
    gender: { type: String, enum: Genders, required: true } 
}, {
    timestamps: true
})

const StudentDataModel = mongoose.model("student", StudentDataSchema);

export default StudentDataModel;