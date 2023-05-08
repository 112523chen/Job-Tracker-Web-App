"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBarChartData = exports.deleteApplication = exports.updateApplication = exports.createApplication = exports.getApplicationByID = exports.getAllApplicationsByModified = exports.getAllApplications = void 0;
const pool = require("../db/index");
/**
 * @desc get all application data
 */
const getAllApplications = (request, response) => {
    pool.query("SELECT * FROM applications ORDER BY created DESC", (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        else {
            response.status(200).json(result.rows);
        }
    });
};
exports.getAllApplications = getAllApplications;
/**
 * @desc get all application sorted by last modified
 */
const getAllApplicationsByModified = (request, response) => {
    pool.query("SELECT * FROM applications ORDER BY modified DESC", (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(200).json(result.rows);
    });
};
exports.getAllApplicationsByModified = getAllApplicationsByModified;
/**
 * @desc get application data by id
 */
const getApplicationByID = (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM applications WHERE id = $1", [id], (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(200).json(result.rows);
    });
};
exports.getApplicationByID = getApplicationByID;
/**
 * @desc create an application
 */
const createApplication = (request, response) => {
    const { title, company, status, url, description } = request.body;
    pool.query("INSERT INTO applications (title, company, created, modified, status, url, description) values ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $3, $4, $5) RETURNING *", [title, company, status, url, description], (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).json(`Application has been created`);
    });
};
exports.createApplication = createApplication;
/**
 * @desc update an application
 */
const updateApplication = (request, response) => {
    const id = request.params.id;
    const { title, company, description, status, url } = request.body;
    pool.query("UPDATE applications SET title = $2, company = $3, status = $5, url = $6, modified = CURRENT_TIMESTAMP, description = $4 WHERE id = $1", [id, title, company, description, status, url], (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).send(`Application modified with ID: ${id}`);
    });
};
exports.updateApplication = updateApplication;
/**
 * @desc delete an application
 */
const deleteApplication = (request, response) => {
    const id = request.params.id;
    pool.query("DELETE FROM applications WHERE id = $1", [id], (error, result) => {
        if (error) {
            response.status(400).json(error);
        }
        response.status(201).send(`Application deleted with ID: ${id}`);
    });
};
exports.deleteApplication = deleteApplication;
/**
 * @desc get data for bar chart
 */
const getBarChartData = (request, response) => {
    pool.query("SELECT status, COUNT(status) FROM applications GROUP BY status", (error, result) => {
        if (error) {
            response.send(404).json(error);
        }
        response.status(201).json(result.rows);
    });
};
exports.getBarChartData = getBarChartData;
