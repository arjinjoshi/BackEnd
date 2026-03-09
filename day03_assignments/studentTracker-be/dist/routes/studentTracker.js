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
const express_1 = require("express");
const studentTrackerController = __importStar(require("../controllers/studentTracker"));
const validator_1 = require("../middlewares/validator");
const budgetTracker_1 = require("../schemas/budgetTracker");
const router = (0, express_1.Router)();
router.get("/", (0, validator_1.validateQueryParams)(budgetTracker_1.fetchAll), studentTrackerController.fetchAll);
router.post("/", (0, validator_1.validateRequestBody)(budgetTracker_1.createStudent), studentTrackerController.createStudent);
router.put("/:id", (0, validator_1.validateParams)(budgetTracker_1.updateStudentParams), (0, validator_1.validateRequestBody)(budgetTracker_1.updateStudentBody), studentTrackerController.updateStudent);
router.delete("/:id", (0, validator_1.validateParams)(budgetTracker_1.deleteStudent), studentTrackerController.deleteStudent);
router.get("/:id", (0, validator_1.validateParams)(budgetTracker_1.fetchById), studentTrackerController.fetchById);
router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `The route ${req.originalUrl} does not exist on this server.`,
        method: req.method
    });
});
exports.default = router;
//# sourceMappingURL=studentTracker.js.map