"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const server = index_1.app.listen(3000, () => {
    console.log(`This is running on port 3000`);
});
exports.default = server;
