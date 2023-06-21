"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDays = void 0;
const getDays = (frame) => {
    switch (frame) {
        case "week":
            return "7";
        case "week2":
            return "14";
        case "month":
            return "30";
        case "month3":
            return "90";
        case "month6":
            return "180";
    }
};
exports.getDays = getDays;
