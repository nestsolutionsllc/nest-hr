export interface TicketType {
  _id: string;
  reporter_id: string;
  assignee_id: string;
  summary: string;
  status: "open" | "closed" | "resolved" | "rejected";
  type?: "salary" | "leave" | "facility" | "other";
  priority?: "low" | "medium" | "high";
  description: string;
  history: {
    _id: string;
    note: string;
    changedBy: {
      name: string;
      imgUrl: string;
    };
    changed: "status" | "assignee_id" | "assignee_group" | "priority";
    changedFrom: string;
    changedTo: string;
    createdAt?: Date;
  }[];
}

export type TicketListModalType = "open" | "closed" | "resolved" | "rejected" | false;

export const users = [
  {
    name: "jigmee",
    imgUrl:
      "https://starecat.com/content/wp-content/uploads/bitcoin-holder-investor-has-to-work-at-mcdonalds-due-to-low-value-puts-on-mcdonalds-hat-meme.jpg",
  },
  { name: "bataa", imgUrl: "https://ih1.redbubble.net/image.1087925321.7603/flat,750x1000,075,f.jpg" },
  { name: "orgil", imgUrl: "https://www.diariodenavarra.es/uploads/2015/05/13/60b0b3506971b.jpeg" },
];

export const usersImgUrl = {
  jigmee:
    "https://starecat.com/content/wp-content/uploads/bitcoin-holder-investor-has-to-work-at-mcdonalds-due-to-low-value-puts-on-mcdonalds-hat-meme.jpg",
  bataa: "https://ih1.redbubble.net/image.1087925321.7603/flat,750x1000,075,f.jpg",
  orgil: "https://www.diariodenavarra.es/uploads/2015/05/13/60b0b3506971b.jpeg",
};
