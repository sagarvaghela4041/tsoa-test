"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const routes_1 = require("./router/routes");
exports.app = express_1.default();
exports.app.use(body_parser_1.json());
routes_1.RegisterRoutes(exports.app);
