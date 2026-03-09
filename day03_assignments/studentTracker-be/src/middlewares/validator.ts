import { Response, Request, NextFunction } from "express";
import { queryObjects } from "node:v8";
import {z} from "zod";




export const validateQueryParams = (schema: z.ZodType<any>) => (
    req: Request,
    res: Response, 
    next: NextFunction
    ) => {

 
        const result = schema.safeParse(req.query);

        if (!result.success) {
            return res.status(400).json({
                message: "Query Validation failed",
                errors: result.error.flatten()
            })
        }
    

        Object.keys(req.query).forEach(key => delete req.query[key]);
        Object.assign(req.query, result.data);

        next();
}



export const validateRequestBody = (schema: z.ZodType<any>) => (
    req: Request,
    res: Response, 
    next: NextFunction
    ) => {
        const result = schema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                message: "Validation failed",
                errors: result.error.flatten()
            })
        }

        req.body = result.data;
        next();
}

export const validateParams = (schema: z.ZodType<any>) => (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        const params = req.params;

        const result = schema.safeParse(req.params);
    
        if (!result.success) {
            return res.status(400).json({
                message: "URL Parameter validation failed",
                errors: result.error.flatten().fieldErrors
            })
        }
    
        req.params = result.data;
        next();
}