"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validateRequestBody = exports.validateQueryParams = void 0;
const validateQueryParams = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
        return res.status(400).json({
            message: "Query Validation failed",
            errors: result.error.flatten()
        });
    }
    Object.keys(req.query).forEach(key => delete req.query[key]);
    Object.assign(req.query, result.data);
    next();
};
exports.validateQueryParams = validateQueryParams;
const validateRequestBody = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Validation failed",
            errors: result.error.flatten()
        });
    }
    req.body = result.data;
    next();
};
exports.validateRequestBody = validateRequestBody;
const validateParams = (schema) => (req, res, next) => {
    const params = req.params;
    const result = schema.safeParse(req.params);
    if (!result.success) {
        return res.status(400).json({
            message: "URL Parameter validation failed",
            errors: result.error.flatten().fieldErrors
        });
    }
    req.params = result.data;
    next();
};
exports.validateParams = validateParams;
//# sourceMappingURL=validator.js.map