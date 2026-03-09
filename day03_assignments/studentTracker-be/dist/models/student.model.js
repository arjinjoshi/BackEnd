"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentData = exports.students = exports.studentDataPath = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
exports.studentDataPath = node_path_1.default.join(__dirname, "/../../database/students.json");
exports.students = [];
let isLoaded = false;
const getStudentData = async () => {
    // if already data present, returns it immediately
    if (isLoaded)
        return exports.students;
    try {
        const response = await (0, promises_1.readFile)(exports.studentDataPath, "utf-8");
        const parsedData = JSON.parse(response);
        exports.students = parsedData.length > 0 ? parsedData : []; // if file is empty
    }
    catch (err) {
        exports.students = []; // if file doesn't exists or parse fails then
    }
    isLoaded = true;
    return exports.students;
};
exports.getStudentData = getStudentData;
//# sourceMappingURL=student.model.js.map