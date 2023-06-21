"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
describe("get Days Function", () => {
    test("should return 7", () => {
        expect((0, functions_1.getDays)("week")).toEqual("7");
    });
    test("should return 14", () => {
        expect((0, functions_1.getDays)("week2")).toEqual("14");
    });
    test("should return 30", () => {
        expect((0, functions_1.getDays)("month")).toEqual("30");
    });
    test("should return 90", () => {
        expect((0, functions_1.getDays)("month3")).toEqual("90");
    });
    test("should return 180", () => {
        expect((0, functions_1.getDays)("month6")).toEqual("180");
    });
});
