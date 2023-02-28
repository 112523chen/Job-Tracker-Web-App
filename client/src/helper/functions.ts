import { addViewFormData, applicationStatusType } from "../components/model";

export const getApplicationColor = (status: applicationStatusType): string => {
  let color: string;
  switch (status) {
    case "Created":
      color = "grey";
      break;
    case "Applied":
      color = "silver";
      break;
    case "Assessment":
      color = "yellow";
      break;
    case "Interview":
      color = "orange";
      break;
    case "Final Round":
      color = "blue";
      break;
    case "Reject":
      color = "red";
      break;
    default:
      color = "black";
      break;
  }
  return color;
};

export const getLabel = (i: string): string => {
  let result: string;
  switch (i) {
    case "title":
      result = "Job Title";
      break;
    case "company":
      result = "Company";
      break;
    case "url":
      result = "Link";
      break;
    // case "description":
    //   result = "Description";
    //   break;
    default:
      result = "";
      break;
  }

  return result;
};

export const getFormType = (formData: addViewFormData, i: string): string => {
  let result: string;
  switch (i) {
    case "title":
      result = formData.title;
      break;
    case "company":
      result = formData.company;
      break;
    case "url":
      result = formData.url;
      break;
    // case "description":
    //   result = formData.description;
    //   break;
    default:
      result = "";
      break;
  }
  return result;
};
