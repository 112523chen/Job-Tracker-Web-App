import axios from "axios";
import {
  application,
  applicationStatusType,
  barChartDataType,
  newFormData,
} from "../../components/model";
import { TimeFrame } from "../models";
import { applicationStatusFilterType } from "../../components/model";

/**
 * @returns all application data from database
 */
export const getApplicationData = async (
  status: applicationStatusFilterType
): Promise<application[]> => {
  let url: string;

  if (status == "all") {
    url = "http://localhost:3000/applications/sorted/created/DESC";
  } else {
    url = `http://localhost:3000/applications/sorted/created/DESC/${status}`;
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
    let response = await fetch("http://localhost:3000/applications", method);

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
      `http://localhost:3000/applications/${id}`,
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
    `http://localhost:3000/applications/${id}`,
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
  const response = await axios.get("http://localhost:3000/barChartData/roles");
  return response.data;
};

/**
 * @returns a promise for the data from database to fill in a bar chart given a time frame
 */
export const getBarChartDataByTimeFrame = async (
  frame: TimeFrame
): Promise<barChartDataType[]> => {
  const response = await axios.get(
    `http://localhost:3000/barChartData/roles/${frame}`
  );
  return response.data;
};

/**
 * @returns a promise for the data from database to fill in bar chart about titles given a time frame
 */
export const getBarChartTitleData = async (limit: number) => {
  const response = await axios.get(
    `http://localhost:3000/barChartData/title/${limit}`
  );
  return response.data;
};
