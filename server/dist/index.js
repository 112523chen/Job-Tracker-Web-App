"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const scaper_1 = require("./scaper/scaper");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });
exports.app = (0, express_1.default)();
const port = process.env.PORT;
const db = require("./db/index");
exports.app.use(cors());
exports.app.use(bodyParser.json());
exports.app.use(bodyParser.urlencoded({
    extended: true,
}));
exports.app.get("/", (request, response) => {
    response.status(200).json({ info: "HI" });
});
// Get all applications in database
exports.app.get("/applications", db.getAllApplications);
// Get all applications sorted by time_status using sort_order filter by application_status
exports.app.get("/applications/sorted/:time_status/:sort_order/:application_status?", db.getAllApplicationsByFilter);
// Get application by application id
exports.app.get("/applications/:id", db.getApplicationByID);
// Post a new application into database
exports.app.post("/applications/", db.createApplication);
// Update an existing application by application id
exports.app.put("/applications/:id", db.updateApplication);
// Delete an existing application by application id
exports.app.delete("/applications/:id", db.deleteApplication);
// Get data for count bar chart by time frame
exports.app.get("/barChartData/roles/:timeFrame?", db.getBarChartRoleDataByWindow);
// Get data for bar chart for top X roles
exports.app.get("/barChartData/title/:limit?", db.getBarChartTitleData);
// Scrape application data from application url
exports.app.get("/link/:application_url", scaper_1.scrapeApplication);
if (process.env.NODE_ENV !== "test") {
    exports.app.listen(port, () => console.log(`App running on port ${port}`));
}
