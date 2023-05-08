"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationRouter = express_1.default.Router();
const { getAllApplications, getAllApplicationsByFilter, getApplicationByID, createApplication, updateApplication, deleteApplication, } = require("../controller/applications");
// Get application
applicationRouter.get("/", () => getAllApplications);
// Get application by application id
applicationRouter.get("/:id", () => getApplicationByID);
// Get all applications in database by column ASC/DESC
applicationRouter.get("/sorted/:filter/:method?", () => getAllApplicationsByFilter);
// Post a new application into database
applicationRouter.post("/", createApplication);
// Update an existing application by application id
applicationRouter.put("/:id", updateApplication);
// Delete an existing application by application id
applicationRouter.delete("/:id", deleteApplication);
module.exports = applicationRouter;
