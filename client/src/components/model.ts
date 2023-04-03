/**
 * Types of application status in database
 * @type {string}
 */
export type applicationStatusType =
  | "Created"
  | "Applied"
  | "Assessment"
  | "Interview"
  | "Final Round"
  | "Reject";

/**
 * Types of application status in views
 * @type {string[]}
 */
export const applicationStatuses: string[] = [
  "Created",
  "Applied",
  "Assessment",
  "Interview",
  "Final Round",
  "Reject",
];

export interface application {
  id: number;
  title: string;
  company: string;
  description: string;
  created: string;
  modified: string;
  status: string;
  url: string;
}

export interface MainPageStates {
  applicationData: application[];
  pathname: string;
  isInAddView: boolean;
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface newFormData {
  status: string;
  title: string;
  company: string;
  url: string;
  description: string;
}

export interface addViewFormData {
  title: string;
  company: string;
  url: string;
}

export interface barChartDataType {
  name: string;
  count: string;
}
