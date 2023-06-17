import { addViewFormData, applicationStatusType } from "../../components/model";

/**
 * Returns the color code based application status within an application
 * @param status - application status
 * @returns the color of color code based on application status
 */
export const getApplicationColor = (status: applicationStatusType): string => {
  let color: string;
  switch (status) {
    case "created":
      color = "grey";
      break;
    case "applied":
      color = "silver";
      break;
    case "assessment":
      color = "yellow";
      break;
    case "interview":
      color = "orange";
      break;
    case "final_round":
      color = "blue";
      break;
    case "reject":
      color = "red";
      break;
    case "offer":
      color = "green";
      break;
  }
  return color;
};

/**
 * Returns the text for the label based on an attribute fromData
 * @param inputName - an attribute from formData
 * @returns the text for the label for the InputContainer component
 */
export const getLabel = (inputName: string): string => {
  let result: string;
  switch (inputName) {
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

/**
 * Returns the formData of certain attribute based on that attribute
 * @param formData - an object that contains from object
 * @param inputName - an attribute from formData
 * @returns the value from formData
 */
export const getFormValue = (
  formData: addViewFormData,
  inputName: string
): string => {
  let result: string;
  switch (inputName) {
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

/**
 * Returns a boolean for if app is in any view that isn't Add view or Application view
 * @param isInAddView - boolean for if app is in add view
 * @param isInAppView - boolean for if app is in application view
 * @returns boolean for if app is in any view
 */
export const isNotAvailable = (
  isInAddView: boolean,
  isInAppView: boolean
): boolean => {
  return isInAddView || isInAppView;
};
