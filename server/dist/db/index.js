"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    port: Number(process.env.DBPORT),
});
const getAllApplications = (request, response) => {
    pool.query("SELECT * FROM applications ORDER BY id", (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
};
const getApplicationByID = (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM applications WHERE id = $1", [id], (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
};
const updateApplication = (request, response) => {
    const id = request.params.id;
    const { title, company, description, status, url } = request.query;
    pool.query("UPDATE applications SET title = $2, company = $3, description = $4, status = $5, url = $6 modified = CURRENT_TIMESTAMP WHERE id = $1", [id, title, company, description, status, url], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Application modified with ID: ${id}`);
    });
};
const updateApplicationTitle = (request, response) => {
    const id = request.params.id;
    const { title } = request.query;
    pool.query("UPDATE applications SET title = $2, modified = CURRENT_TIMESTAMP WHERE id = $1", [id, title], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Title modified on application with ID: ${id}`);
    });
};
const updateApplicationCompany = (request, response) => {
    const id = request.params.id;
    const { company } = request.query;
    pool.query("UPDATE applications SET company = $2, modified = CURRENT_TIMESTAMP WHERE id = $1", [id, company], (error, results) => {
        if (error) {
            throw error;
        }
        response
            .status(200)
            .send(`Company modified on application with ID: ${id}`);
    });
};
const updateApplicationDescription = (request, response) => {
    const id = request.params.id;
    const { description } = request.query;
    pool.query("UPDATE applications SET description = $2, modified = CURRENT_TIMESTAMP WHERE id = $1", [id, description], (error, results) => {
        if (error) {
            throw error;
        }
        response
            .status(200)
            .send(`Description modified on application with ID: ${id}`);
    });
};
const updateApplicationStatus = (request, response) => {
    const id = request.params.id;
    const { status } = request.query;
    pool.query("UPDATE applications SET status = $2, modified = CURRENT_TIMESTAMP WHERE id = $1", [id, status], (error, results) => {
        if (error) {
            throw error;
        }
        response
            .status(200)
            .send(`Status modified on application with ID: ${id}`);
    });
};
const updateApplicationURL = (request, response) => {
    const id = request.params.id;
    const { url } = request.query;
    pool.query("UPDATE applications SET url = $2, modified = CURRENT_TIMESTAMP WHERE id = $1", [id, url], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`URL modified on application with ID: ${id}`);
    });
};
const createApplication = (request, response) => {
    const { title, company, description, status, url } = request.query;
    pool.query("INSERT INTO applications (title, company, description, created, modified, status, url) values ($1, $2, $3,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $4, $5) RETURNING *", [title, company, description, status, url], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(201).send(`Application has been created`);
    });
};
const deleteApplication = (request, response) => {
    const id = request.params.id;
    pool.query("DELETE FROM applications WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Application deleted with ID: ${id}`);
    });
};
module.exports = {
    getAllApplications,
    getApplicationByID,
    updateApplication,
    updateApplicationTitle,
    updateApplicationCompany,
    updateApplicationDescription,
    updateApplicationStatus,
    updateApplicationURL,
    createApplication,
    deleteApplication,
};
