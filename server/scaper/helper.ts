const cheerio = require("cheerio");

export const getTitle = (html: any, url: string): string => {
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

export const getCompany = (html: any, url: string): string => {
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

export const getLocation = (html: any, url: string): string => {
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

export const getMode = (html: any, url: string): string => {
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

export const getDescription = (html: any, url: string): string => {
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
