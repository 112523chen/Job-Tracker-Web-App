"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require("../db/index");
// Get all applications in database
const getAllApplications = (request, response) => {
    pool.query(`SELECT * FROM applications`, (error, result) => {
        if (error) {
            response.status(404).json(error);
        }
        response.status(200).json(result.rows);
    });
};
// Get all applications in database by column ASC/DESC
const getAllApplicationsByFilter = (request, response) => {
    const { filter, method } = request.params;
    pool.query(`SELECT * FROM applications ORDER BY ${filter} ${method}`, (error, result) => {
        if (error) {
            response.status(404).json(error);
        }
        response.status(200).json(result.rows);
    });
};
// Get application by application id
const getApplicationByID = (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM applications WHERE id = $1", [id], (error, result) => {
        if (error) {
            response.status(404).json(error);
        }
        response.status(201).json(result.rows);
    });
};
// Post a new application into database
const createApplication = (request, response) => {
    const { title, company, status, url, description } = request.body;
    pool.query("INSERT INTO applications (title, company, created, modified, status, url, description) values ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $3, $4, $5) RETURNING *", [title, company, status, url, description], (error, results) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).send(`Application has been created`);
    });
};
// Update an existing application by application id
const updateApplication = (request, response) => {
    const id = request.params.id;
    const { title, company, description, status, url } = request.body;
    pool.query("UPDATE applications SET title = $2, company = $3, status = $5, url = $6, modified = CURRENT_TIMESTAMP, description = $4 WHERE id = $1", [id, title, company, description, status, url], (error, results) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).send(`Application modified with ID: ${id}`);
    });
};
// Delete an existing application by application id
const deleteApplication = (request, response) => {
    const id = request.params.id;
    pool.query("DELETE FROM applications WHERE id = $1", [id], (error, results) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).send(`Application deleted with ID: ${id}`);
    });
};
// Get data for bar chart
exports.getBarChartData = (request, response) => {
    pool.query("SELECT status, COUNT(status) FROM applications GROUP BY status", (error, results) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).json(results.rows);
    });
};
module.exports = {
    getAllApplications,
    getAllApplicationsByFilter,
    getApplicationByID,
    updateApplication,
    createApplication,
    deleteApplication,
};
