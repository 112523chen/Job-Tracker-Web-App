"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescription = exports.getMode = exports.getLocation = exports.getCompany = exports.getTitle = void 0;
const cheerio = require("cheerio");
const getTitle = (html, url) => {
    const $ = cheerio.load(html);
    switch (url) {
        case "lever.co":
            return $(".posting-headline > h2").text();
            break;
        case "greenhouse.io":
            return $(".app-title").text().trim();
        default:
            return "No title found";
            break;
    }
};
exports.getTitle = getTitle;
const getCompany = (html, url) => {
    const $ = cheerio.load(html);
    switch (url) {
        case "lever.co":
            return $(".main-header-logo img")
                .attr("alt")
                .split(" ")
                .slice(0, -1)
                .join(" ");
            break;
        case "greenhouse.io":
            return $(".company-name").text().trim();
            break;
        default:
            return "No company found";
            break;
    }
};
exports.getCompany = getCompany;
const getLocation = (html, url) => {
    const $ = cheerio.load(html);
    switch (url) {
        case "lever.co":
            return $(".posting-category").text().split("/")[0].trim();
            break;
        case "greenhouse.io":
            return $(".location").text().trim();
            break;
        default:
            return "No location found";
            break;
    }
};
exports.getLocation = getLocation;
const getMode = (html, url) => {
    const $ = cheerio.load(html);
    switch (url) {
        case "lever.co":
            return $(".posting-category").text().split("/").at(-1).trim();
            break;
        default:
            return "No mode found";
            break;
    }
};
exports.getMode = getMode;
const getDescription = (html, url) => {
    const $ = cheerio.load(html);
    switch (url) {
        case "lever.co":
            return $(".page-full-width .page-centered").slice(0, -2).text().trim();
            break;
        case "greenhouse.io":
            return $("#content").text();
        default:
            return "No description found";
            break;
    }
};
exports.getDescription = getDescription;
