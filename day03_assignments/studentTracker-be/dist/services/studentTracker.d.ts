import { StudentData, StudentDataRequest, StudentDataUpdate } from "../Interfaces/studentTracker";
export declare const fetchAll: (req: any) => Promise<StudentData[]>;
export declare const createStudent: (newStudent: StudentDataRequest) => Promise<StudentData>;
export declare const updateStudent: (updatedStudentInfo: StudentDataUpdate, id: string) => Promise<StudentData>;
export declare const deleteStudent: (id: string) => Promise<string>;
export declare const fetchById: (id: string) => Promise<StudentData>;
//# sourceMappingURL=studentTracker.d.ts.map