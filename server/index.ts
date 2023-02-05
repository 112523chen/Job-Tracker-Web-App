import express, { Express, Request, Response } from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const app = express();
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
