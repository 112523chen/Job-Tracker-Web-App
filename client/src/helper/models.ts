export type TimeFrame = "week" | "week2" | "month" | "month3" | "month6";

export interface scrapedApplicationData {
  title: string;
  company: string;
  location: string;
  mode: string;
  description: string;
}
