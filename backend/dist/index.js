"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.listen(config_1.port, () => {
    console.log(`Port is Running on ${config_1.port}`);
});
app.get("/", (req, res) => {
    res.send({
        message: "Server is Setup Perfectly",
        status: 200
    });
});
