import { Response, Request, NextFunction } from "express";
import { z } from "zod";
export declare const validateQueryParams: (schema: z.ZodType<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const validateRequestBody: (schema: z.ZodType<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const validateParams: (schema: z.ZodType<any>) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validator.d.ts.map