"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
const PORT = 3000;
// parse json in request body
app.use(express_1.default.json());
// every routes defined here inside this route
app.use("/api", routes_1.default);
// usually a last middleware which throw error until and unless another middleware isn't defined so we usually don't call next() inside errorhandler
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`APP is running on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map