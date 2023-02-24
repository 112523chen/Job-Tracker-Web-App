export type applicationStatusType =
  | "created"
  | "applied"
  | "assessment"
  | "interview"
  | "finalRound"
  | "reject";

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

export interface newFormData {
  status: string;
  title: string;
  company: string;
  url: string;
  description: string;
}

export interface barChartDataType {
  status: string;
  count: string;
}
