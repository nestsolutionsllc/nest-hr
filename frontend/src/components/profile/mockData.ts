import { MockType, InfoType } from "./types";

export const INFO_MOCK_DATA: InfoType = {
  lastName: "Bill",
  firstName: "Duluu",
  departmentName: "Technology",
  position: "Software Developer",
  email: "duluuf@gmail.com",
  salary: "99999999",
  joiningDate: new Date(),
  userPhoto:
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
};
export const MOCK_DATA: MockType = {
  name: "Developer",
  checklists: [
    {
      type: "Basics",
      questions: [{ question: "Company imac or laptop", checked: false }],
    },
    {
      type: "Accounts",
      questions: [
        { question: "Login to Slack with your Google account", checked: false },
        { question: "Login to Slack with your Google account", checked: false },
      ],
    },
    {
      type: "Tools",
      questions: [
        { question: "Github access", checked: false },
        { question: "Mono-repo guidance, readme", checked: false },
      ],
    },
  ],
};
export const SALARY_MOCK_DATA = {};
