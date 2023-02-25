import {
  application,
  barChartDataType,
  newFormData,
} from "../../components/model";

export const getApplicationData = async (): Promise<application[]> => {
  const response = await fetch("http://localhost:3000/applications");
  let applications = (await response.json()) as application[];
  return applications;
};

export const getApplicationDataByModifiedDate = async (): Promise<
  application[]
> => {
  const response = await fetch(
    "http://localhost:3000/application/sorted/modified/DESC"
  );
  let applications = (await response.json()) as application[];
  return applications;
};

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

export const getBarChartData = async (): Promise<barChartDataType[]> => {
  const response = await fetch("http://localhost:3000/barChartData");
  let data = (await response.json()) as barChartDataType[];
  return data;
};
