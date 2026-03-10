import { Router } from "express";
import * as studentTrackerController from "../controllers/studentTracker"
import { validateParams, validateQueryParams, validateRequestBody } from "../middlewares/validator";
import { createStudent, deleteStudent, fetchAll, fetchById, updateStudentBody, updateStudentParams } from "../schemas/budgetTracker";



const router = Router();

router.get("/", validateQueryParams(fetchAll),  studentTrackerController.fetchAll);

router.post("/", validateRequestBody(createStudent), studentTrackerController.createStudent);

router.put("/:id", validateParams(updateStudentParams), validateRequestBody(updateStudentBody), studentTrackerController.updateStudent);

router.delete("/:id", validateParams(deleteStudent), studentTrackerController.deleteStudent);

router.get("/:id", validateParams(fetchById), studentTrackerController.fetchById);

router.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `The route ${req.originalUrl} does not exist on this server.`,
        method: req.method
    });
});

export default router;