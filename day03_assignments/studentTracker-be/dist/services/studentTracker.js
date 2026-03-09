"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchById = exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.fetchAll = void 0;
const promises_1 = require("node:fs/promises");
const student_model_1 = require("../models/student.model");
const fetchAll = async (req) => {
    await (0, student_model_1.getStudentData)();
    const { gender } = req;
    if (gender) {
        return student_model_1.students.filter(s => s.gender === gender);
    }
    return student_model_1.students;
};
exports.fetchAll = fetchAll;
const createStudent = async (newStudent) => {
    await (0, student_model_1.getStudentData)();
    const dataToCreate = {
        id: crypto.randomUUID(),
        gender: newStudent.gender,
        name: newStudent.name,
        address: newStudent.address,
        phoneNumber: newStudent.phoneNumber
    };
    student_model_1.students.push(dataToCreate);
    console.log(student_model_1.students);
    await (0, promises_1.writeFile)(student_model_1.studentDataPath, JSON.stringify(student_model_1.students, null, 2));
    return dataToCreate;
};
exports.createStudent = createStudent;
const updateStudent = async (updatedStudentInfo, id) => {
    await (0, student_model_1.getStudentData)();
    const index = student_model_1.students.findIndex(s => s.id === id);
    console.log(student_model_1.students[index]);
    if (index === -1) {
        const notFoundError = {
            message: "Student not found",
            status: 404
        };
        throw notFoundError;
    }
    student_model_1.students[index] = { ...student_model_1.students[index], ...updatedStudentInfo };
    await (0, promises_1.writeFile)(student_model_1.studentDataPath, JSON.stringify(student_model_1.students, null, 2));
    return student_model_1.students[index];
};
exports.updateStudent = updateStudent;
const deleteStudent = async (id) => {
    await (0, student_model_1.getStudentData)();
    const index = student_model_1.students.findIndex(s => s.id === id);
    if (index === -1) {
        const notFoundError = {
            message: "Student not found",
            status: 404
        };
        throw notFoundError;
    }
    student_model_1.students.splice(index, 1);
    await (0, promises_1.writeFile)(student_model_1.studentDataPath, JSON.stringify(student_model_1.students, null, 2));
    return "Deleted Successfully";
};
exports.deleteStudent = deleteStudent;
const fetchById = async (id) => {
    await (0, student_model_1.getStudentData)();
    const student = student_model_1.students.find(s => s.id === id);
    if (!student) {
        const notFoundError = {
            message: "Student not found",
            status: 404
        };
        throw notFoundError;
    }
    return student;
};
exports.fetchById = fetchById;
//# sourceMappingURL=studentTracker.js.map