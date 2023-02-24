import { Pool } from "pg";
import { Request, Response } from "express";

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  port: Number(process.env.DBPORT),
});

// Get all applications in database
const getAllApplications = (request: Request, response: Response) => {
  pool.query("SELECT * FROM applications ORDER BY id", (error, result) => {
    if (error) {
      response.status(404);
      throw error;
    }
    response.status(200).json(result.rows);
    console.log("Running Get All Applications Command");
  });
};

// Get application by application id
const getApplicationByID = (request: Request, response: Response) => {
  const id = request.params.id;
  pool.query(
    "SELECT * FROM applications WHERE id = $1",
    [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).json(result.rows);
    }
  );
};

// Post a new application into database
const createApplication = (request: Request, response: Response) => {
  const { title, company, status, url, description } = request.body;
  pool.query(
    "INSERT INTO applications (title, company, created, modified, status, url, description) values ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $3, $4, $5) RETURNING *",
    [title, company, status, url, description],
    (error, results) => {
      if (error) {
        response.status(400);
        throw error;
      }
      response.status(201).send(`Application has been created`);
    }
  );
};

// Update an existing application by application id
const updateApplication = (request: Request, response: Response) => {
  const id = request.params.id;

  const { title, company, description, status, url } = request.body;
  pool.query(
    "UPDATE applications SET title = $2, company = $3, status = $5, url = $6, modified = CURRENT_TIMESTAMP, description = $4 WHERE id = $1",
    [id, title, company, description, status, url],
    (error, results) => {
      if (error) {
        response.status(400);
        throw error;
      }
      response.status(201).send(`Application modified with ID: ${id}`);
    }
  );
};

// Delete an existing application by application id
const deleteApplication = (request: Request, response: Response) => {
  const id = request.params.id;

  pool.query(
    "DELETE FROM applications WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Application deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getAllApplications,
  getApplicationByID,
  updateApplication,
  createApplication,
  deleteApplication,
};
