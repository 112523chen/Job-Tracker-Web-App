import axios from "axios";
import { scrapedApplicationData } from "./model";
import { getLocation } from "./helper";
import { getTitle, getCompany, getMode, getDescription } from "./helper";
import { Request, Response } from "express";

export const scrapeApplication = async (
  request: Request,
  response: Response
) => {
  let payload: scrapedApplicationData | {} = {};
  const url = request.params.application_url;

  try {
    if (url.includes("lever.co")) {
      const response = await axios.get(url);

      if (response.status === 200) {
        const html = response.data;
        payload = {
          title: getTitle(html, "lever.co"),
          company: getCompany(html, "lever.co"),
          location: getLocation(html, "lever.co"),
          mode: getMode(html, "lever.co"),
          description: getDescription(html, "lever.co"),
        };
      }
    } else if (url.includes("greenhouse.io")) {
      const response = await axios.get(url);
      if (response.status === 200) {
        const html = response.data;
        payload = {
          title: getTitle(html, "greenhouse.io"),
          company: getCompany(html, "greenhouse.io"),
          location: getLocation(html, "greenhouse.io"),
          mode: getMode(html, "greenhouse.io"),
          description: getDescription(html, "greenhouse.io"),
        };
      }
    }

    response.status(200).json(payload);
  } catch (error) {
    response.status(500).json({ error });
  }
};
