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
