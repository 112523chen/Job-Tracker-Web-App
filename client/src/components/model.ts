/**
 * Types of application status in database
 * @type {string}
 */
export type applicationStatusType =
  | "created"
  | "applied"
  | "assessment"
  | "interview"
  | "final_round"
  | "reject"
  | "offer";

/**
 * Types of application statuses for filtering application
 * @type {string}
 */
export type applicationStatusFilterType = applicationStatusType | "all";

/**
 * Types of application status in views
 * @type {string[]}
 */
export const applicationStatuses: string[] = [
  "created",
  "applied",
  "assessment",
  "interview",
  "final_round",
  "reject",
  "offer",
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
  updateCurrentStatusFilter: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
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
