export type genderCategory = "Male" | "Female" | "Non-Binary";
export interface StudentData {
    id: string;
    gender: genderCategory;
    name: string;
    address: string;
    phoneNumber: string;
}
export interface StudentDataRequest extends Omit<StudentData, "id"> {
}
export interface StudentDataUpdate extends Partial<StudentDataRequest> {
}
//# sourceMappingURL=studentTracker.d.ts.map