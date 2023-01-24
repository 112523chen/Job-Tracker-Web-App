"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
require("dotenv").config({ path: "../.env" });
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = require("./db/index");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get("/", (request, response) => {
    response.json({ info: "HI" });
});
app.get("/applications", db.getAllApplications);
app.post("/applications/", db.createApplication);
app.delete("/applications/:id", db.deleteApplication);
app.get("/applications/:id", db.getApplicationByID);
app.put("/applications/:id", db.updateApplication);
app.put("/applications/:id/title", db.updateApplicationTitle);
app.put("/applications/:id/company", db.updateApplicationCompany);
app.put("/applications/:id/description", db.updateApplicationDescription);
app.put("/applications/:id/status", db.updateApplicationStatus);
app.put("/applications/:id/url", db.updateApplicationURL);
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
