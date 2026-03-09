import { Request, Response, NextFunction } from "express";
import * as studentTrackerService from "../services/studentTracker"

export const fetchAll = async (req: Request, res: Response, next: NextFunction) => {

    try{
        const response = await studentTrackerService.fetchAll(req.query)

        res.status(200).json({
            data: response
        })

    }catch(error){
        next(error);
    }
}

export const createStudent = async ( req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body;

        const response = await studentTrackerService.createStudent(data);

        res.status(201).json({
            data: response
        })
    }catch(error){
        next(error);
    }
}

export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id} = req.params;

        const response = await studentTrackerService.deleteStudent(String(id));
        res.status(200).json({
            message: response
        })
    }catch(error){
        next(error);
    }
}
export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const data = req.body;
        
        const {id} = req.params;

        const response = await studentTrackerService.updateStudent(data, String(id));
        res.status(200).json({
            message: "Data updated Successfully",
            data: response
        })
    }catch(error){
        next(error);
    }
}

export const fetchById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;

        const data = await studentTrackerService.fetchById(String(id));

        res.status(200).json({
            data
        })
    }
    catch (error) {
        next(error);

    }
}