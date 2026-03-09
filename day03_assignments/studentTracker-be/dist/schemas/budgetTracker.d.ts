import { z } from "zod";
export declare const createStudent: z.ZodObject<{
    gender: z.ZodEnum<{
        Male: "Male";
        Female: "Female";
        "Non-Binary": "Non-Binary";
    }>;
    name: z.ZodString;
    address: z.ZodString;
    phoneNumber: z.ZodString;
}, z.core.$strip>;
export declare const fetchAll: z.ZodObject<{
    gender: z.ZodOptional<z.ZodEnum<{
        Male: "Male";
        Female: "Female";
        "Non-Binary": "Non-Binary";
    }>>;
}, z.core.$strip>;
export declare const fetchById: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const updateStudentParams: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export declare const updateStudentBody: z.ZodObject<{
    gender: z.ZodOptional<z.ZodEnum<{
        Male: "Male";
        Female: "Female";
        "Non-Binary": "Non-Binary";
    }>>;
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const deleteStudent: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=budgetTracker.d.ts.map