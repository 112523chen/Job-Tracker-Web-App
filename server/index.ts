import express, { Request, Response } from "express";
import { scrapeApplication } from "./scaper/scaper";
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

export const app = express();
const port = process.env.PORT;
const db = require("./db/index");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ info: "HI" });
});

// Get all applications in database
app.get("/applications", db.getAllApplications);

// Get all applications sorted by time_status using sort_order filter by application_status
app.get(
  "/applications/sorted/:time_status/:sort_order/:application_status?",
  db.getAllApplicationsByFilter
);

// Get application by application id
app.get("/applications/:id", db.getApplicationByID);

// Post a new application into database
app.post("/applications/", db.createApplication);

// Update an existing application by application id
app.put("/applications/:id", db.updateApplication);

// Delete an existing application by application id
app.delete("/applications/:id", db.deleteApplication);

// Get data for count bar chart by time frame
app.get("/barChartData/roles/:timeFrame?", db.getBarChartRoleDataByWindow);

// Get data for bar chart for top X roles
app.get("/barChartData/title/:limit?", db.getBarChartTitleData);

// Scrape application data from application url
app.get("/link/:application_url", scrapeApplication);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`App running on port ${port}`));
}
