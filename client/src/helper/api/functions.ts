import axios from "axios";
import {
  application,
  barChartDataType,
  newFormData,
} from "../../components/model";
import { TimeFrame, scrapedApplicationData } from "../models";
import { applicationStatusFilterType } from "../../components/model";

const host: string = "localhost";
const port: number = 3001;

/**
 * @returns all application data from database
 */
export const getApplicationData = async (
  status: applicationStatusFilterType,
  modifier?: string
): Promise<application[]> => {
  let url: string;
  modifier = modifier ? modifier : "created";

  if (status == "all") {
    url = `http://${host}:${port}/applications/sorted/${modifier}/DESC`;
  } else {
    url = `http://${host}:${port}/applications/sorted/${modifier}/DESC/${status}`;
  }

  const response = await fetch(url);

  let applications = (await response.json()) as application[];
  return applications;
};

/**
 *
 * @param data - an object that is made up data for a new application
 * @returns a promise of string to indicate if the server has gotten the data
 */
export const addApplication = async (
  data: newFormData
): Promise<string | undefined> => {
  let method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    let response = await fetch(`http://${host}:${port}/applications`, method);

    if (response.status === 201) {
      return "Passed";
    } else {
      return "Failed";
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param url - a url for a job application
 * @returns a promise of scraped data from the url
 */
export const getJobData = async (
  url: string
): Promise<scrapedApplicationData | undefined> => {
  let input = await encodeURIComponent(url);
  try {
    let response = await fetch(`http://${host}:${port}/link/${input}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param id - application id
 * @returns a promise of a string to indicate if the server has deleted the application
 */
export const removeApplication = async (
  id: number
): Promise<string | undefined> => {
  let method = {
    method: "DELETE",
  };

  try {
    let response = await fetch(
      `http://${host}:${port}/applications/${id}`,
      method
    );

    if (response.status === 201) {
      return "Passed";
    } else {
      return "Failed";
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @param id - application id
 * @param data - updated data from the form
 * @returns a promise of a string to indicate if teh server has updated the data inside the application
 */
export const updateApplication = async (
  id: number,
  data: application
): Promise<string | undefined> => {
  let method = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response = await fetch(
    `http://${host}:${port}/applications/${id}`,
    method
  );
  if (response.status === 201) {
    return "Passed";
  } else {
    return "Failed";
  }
};

/**
 *
 * @returns a promise for the data from database to fill in a bar chart
 */
export const getBarChartData = async (): Promise<barChartDataType[]> => {
  const response = await axios.get(`http://${host}:${port}/barChartData/roles`);
  return response.data;
};

/**
 * @returns a promise for the data from database to fill in a bar chart given a time frame
 */
export const getBarChartDataByTimeFrame = async (
  frame: TimeFrame
): Promise<barChartDataType[]> => {
  const response = await axios.get(
    `http://${host}:${port}/barChartData/roles/${frame}`
  );
  return response.data;
};

/**
 * @returns a promise for the data from database to fill in bar chart about titles given a time frame
 */
export const getBarChartTitleData = async (limit: number) => {
  const response = await axios.get(
    `http://${host}:${port}/barChartData/title/${limit}`
  );
  return response.data;
};
