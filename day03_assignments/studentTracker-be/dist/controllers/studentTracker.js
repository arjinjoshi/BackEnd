"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchById = exports.updateStudent = exports.deleteStudent = exports.createStudent = exports.fetchAll = void 0;
const studentTrackerService = __importStar(require("../services/studentTracker"));
const fetchAll = async (req, res, next) => {
    try {
        const response = await studentTrackerService.fetchAll(req.query);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        next(error);
    }
};
exports.fetchAll = fetchAll;
const createStudent = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await studentTrackerService.createStudent(data);
        res.status(201).json({
            data: response
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createStudent = createStudent;
const deleteStudent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await studentTrackerService.deleteStudent(String(id));
        res.status(200).json({
            message: response
        });
    }
    catch (error) {
        next(error);
    }
};
exports.deleteStudent = deleteStudent;
const updateStudent = async (req, res, next) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const response = await studentTrackerService.updateStudent(data, String(id));
        res.status(200).json({
            message: "Data updated Successfully",
            data: response
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateStudent = updateStudent;
const fetchById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await studentTrackerService.fetchById(String(id));
        res.status(200).json({
            data
        });
    }
    catch (error) {
        next(error);
    }
};
exports.fetchById = fetchById;
//# sourceMappingURL=studentTracker.js.map