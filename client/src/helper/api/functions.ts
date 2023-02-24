import { application } from "../../components/model";

export const getApplicationData = async (): Promise<application[]> => {
  const response = await fetch("http://localhost:3000/applications");
  let applications = (await response.json()) as application[];
  return applications;
};
