"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    roots: ["<rootDir>/"],
    testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testEnvironment: "node",
};
