"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudentBody = exports.updateStudentParams = exports.fetchById = exports.fetchAll = exports.createStudent = void 0;
const zod_1 = require("zod");
exports.createStudent = zod_1.z.object({
    gender: zod_1.z.enum(["Male", "Female", "Non-Binary"]),
    name: zod_1.z.string().min(5),
    address: zod_1.z.string().min(5),
    phoneNumber: zod_1.z.string().length(10, "Must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers")
});
exports.fetchAll = zod_1.z.object({
    gender: zod_1.z.enum(["Male", "Female", "Non-Binary"]).optional()
});
exports.fetchById = zod_1.z.object({
    id: zod_1.z.string().min(5)
});
exports.updateStudentParams = zod_1.z.object({
    id: zod_1.z.string().min(5),
});
exports.updateStudentBody = zod_1.z.object({
    gender: zod_1.z.enum(["Male", "Female", "Non-Binary"]).optional(),
    name: zod_1.z.string().min(5).optional(),
    address: zod_1.z.string().min(5).optional(),
    phoneNumber: zod_1.z.string().length(10, "Must be exactly 10 digits").regex(/^\d+$/, "Must contain only numbers").optional()
});
exports.deleteStudent = zod_1.z.object({
    id: zod_1.z.string().min(5),
});
//# sourceMappingURL=budgetTracker.js.map