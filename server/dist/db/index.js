"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const functions_1 = require("../helper/functions");
const pool = new pg_1.Pool({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DB,
    port: Number(process.env.DBPORT),
});
// Get all applications in database
const getAllApplications = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query("SELECT * FROM applications ORDER BY created DESC");
        response.status(200).json(result.rows);
    }
    catch (error) {
        response.status(404).json(error);
    }
});
// Get all applications sorted by time_status using sort_order filter by an optional application_status
const getAllApplicationsByFilter = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const timeStatus = request.params.time_status;
    const sortOrder = request.params.sort_order;
    const applicationStatus = request.params.application_status;
    try {
        let result;
        if (applicationStatus !== undefined) {
            result = yield pool.query(`SELECT * FROM applications WHERE status = $1 ORDER BY $2 ${sortOrder}`, [applicationStatus, timeStatus]);
        }
        else {
            result = yield pool.query(`SELECT * FROM applications ORDER BY $1 ${sortOrder}`, [timeStatus]);
        }
        response.status(200).json(result.rows);
    }
    catch (error) {
        console.log(request.params);
        console.log(applicationStatus !== undefined);
        response.status(404).json(error);
    }
});
// Get application by application id
const getApplicationByID = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    try {
        const result = yield pool.query("SELECT * FROM applications WHERE id = $1", [id]);
        response.status(200).json(result.rows);
    }
    catch (error) {
        response.status(401).json(error);
    }
});
// Post a new application into database
const createApplication = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, company, status, url, description } = request.body;
    console.log(company);
    try {
        const result = yield pool.query("INSERT INTO applications (title, company, created, modified, status, url, description) values ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, $3, $4, $5) RETURNING *", [title, company, status, url, description]);
        response.status(201).send(`Application has been created`);
    }
    catch (error) {
        response.status(401).json(error);
    }
});
// Update an existing application by application id
const updateApplication = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const { title, company, description, status, url } = request.body;
    try {
        const result = yield pool.query("UPDATE applications SET title = $2, company = $3, status = $5, url = $6, modified = CURRENT_TIMESTAMP, description = $4 WHERE id = $1", [id, title, company, description, status, url]);
        response.status(201).send(`Application modified with ID: ${id}`);
    }
    catch (error) {
        response.status(401).json(error);
    }
});
// Delete an existing application by application id
const deleteApplication = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    try {
        const result = yield pool.query("DELETE FROM applications WHERE id = $1", [
            id,
        ]);
        response.status(201).send(`Application deleted with ID: ${id}`);
    }
    catch (error) {
        response.status(401).json(error);
    }
});
// Get data for bar chart by window
const getBarChartRoleDataByWindow = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const timeFrame = (0, functions_1.getDays)(request.params.timeFrame || "week");
    try {
        const results = yield pool.query(`SELECT status, COUNT(status) FROM applications WHERE created > CURRENT_DATE - ${timeFrame} AND status != 'created' GROUP BY status`);
        response.status(201).json(results.rows);
    }
    catch (error) {
        response.status(404).json(error);
    }
});
// Get data for bar chart about titles
const getBarChartTitleData = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = request.params.limit;
    try {
        const results = yield pool.query(`SELECT title, COUNT(title) FROM applications GROUP BY title ORDER BY title DESC LIMIT $1`, [limit]);
        response.status(201).json(results.rows);
    }
    catch (error) {
        response.status(404).json(error);
    }
});
module.exports = {
    getAllApplications,
    getAllApplicationsByFilter,
    getApplicationByID,
    updateApplication,
    createApplication,
    deleteApplication,
    getBarChartRoleDataByWindow,
    getBarChartTitleData,
};
