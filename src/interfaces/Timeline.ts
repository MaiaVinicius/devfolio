interface TimelineItem {
  company?: string;
  date: string;
  full_date?: string; // eg: March 28, 2021
  title: string;
  tools?: Array<Tool>;
  highlight?: boolean;
  text: string;
  url?: string;
}
export interface Tool {
  name: string;
}

export default TimelineItem;
