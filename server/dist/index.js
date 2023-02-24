"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
const app = (0, express_1.default)();
const port = process.env.PORT;
const db = require("./db/index");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.get("/", (request, response) => {
    response.json({ info: "HI" });
});
// Get all applications in database
app.get("/applications", db.getAllApplications);
// Get application by application id
app.get("/applications/:id", db.getApplicationByID);
// Post a new application into database
app.post("/applications/", db.createApplication);
// Update an existing application by application id
app.put("/applications/:id", db.updateApplication);
// Delete an existing application by application id
app.delete("/applications/:id", db.deleteApplication);
// Get data for bar chart
app.get("/barChartData", db.getBarChartData);
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
