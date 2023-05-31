import { TimeFrame } from "./models";

export const getDays = (frame: TimeFrame): string => {
  switch (frame) {
    case "week":
      return "7";
    case "week2":
      return "14";
    case "month":
      return "30";
    case "month3":
      return "90";
    case "month6":
      return "180";
  }
};
