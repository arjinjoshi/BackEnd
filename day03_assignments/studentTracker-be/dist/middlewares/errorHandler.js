"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => {
    const { status, message } = error;
    res.status(status || 500).json({
        message: message || "Something went wrong"
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map