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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeApplication = void 0;
const axios_1 = __importDefault(require("axios"));
const helper_1 = require("./helper");
const helper_2 = require("./helper");
const scrapeApplication = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let payload = {};
    const url = request.params.application_url;
    try {
        if (url.includes("lever.co")) {
            const response = yield axios_1.default.get(url);
            if (response.status === 200) {
                const html = response.data;
                payload = {
                    title: (0, helper_2.getTitle)(html, "lever.co"),
                    company: (0, helper_2.getCompany)(html, "lever.co"),
                    location: (0, helper_1.getLocation)(html, "lever.co"),
                    mode: (0, helper_2.getMode)(html, "lever.co"),
                    description: (0, helper_2.getDescription)(html, "lever.co"),
                };
            }
        }
        else if (url.includes("greenhouse.io")) {
            const response = yield axios_1.default.get(url);
            if (response.status === 200) {
                const html = response.data;
                payload = {
                    title: (0, helper_2.getTitle)(html, "greenhouse.io"),
                    company: (0, helper_2.getCompany)(html, "greenhouse.io"),
                    location: (0, helper_1.getLocation)(html, "greenhouse.io"),
                    mode: (0, helper_2.getMode)(html, "greenhouse.io"),
                    description: (0, helper_2.getDescription)(html, "greenhouse.io"),
                };
            }
        }
        response.status(200).json(payload);
    }
    catch (error) {
        response.status(500).json({ error });
    }
});
exports.scrapeApplication = scrapeApplication;
