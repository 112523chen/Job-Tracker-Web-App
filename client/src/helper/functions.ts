import { applicationStatusType } from "../components/model";

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
    case "finalRound":
      color = "blue";
      break;
    case "reject":
      color = "red";
      break;
    default:
      color = "black";
      break;
  }
  return color;
};
