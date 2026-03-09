import {z} from "zod"

export const createStudent = z.object({
    gender: z.enum(["Male" , "Female" , "Non-Binary"]),
    name: z.string().min(5),
    address: z.string().min(5),
    phoneNumber: z.string().length(10, "Must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers")
})

export const fetchAll = z.object({
    gender: z.enum(["Male" , "Female" , "Non-Binary"]).optional()
})

export const fetchById = z.object({
    id: z.string().min(5)
})

export const updateStudentParams = z.object({
    id: z.string().min(5),
})

export const updateStudentBody = z.object({
    gender: z.enum(["Male" , "Female" , "Non-Binary"]).optional(),
    name: z.string().min(5).optional(),
    address: z.string().min(5).optional(),
    phoneNumber: z.string().length(10, "Must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers").optional()
})

export const deleteStudent = z.object({
    id: z.string().min(5),
})