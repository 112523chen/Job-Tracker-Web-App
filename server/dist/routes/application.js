"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applications_1 = require("../controllers/applications");
const express = require("express");
const applicationRouter = express.Router();
// Get all applications in database
applicationRouter.get("/", applications_1.getAllApplications);
// Get application by application id
applicationRouter.get("/:id", applications_1.getApplicationByID);
// Post a new application into database
applicationRouter.post("/", applications_1.createApplication);
// Update an existing application by application id
applicationRouter.put("/:id", applications_1.updateApplication);
// Delete an existing application by application id
applicationRouter.delete("/:id", applications_1.deleteApplication);
module.exports = applicationRouter;
