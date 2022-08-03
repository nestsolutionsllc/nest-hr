import { InfoType, AchievementListType, CheckListMockType, ChartType } from "./type";

export type InfoType = {
  lastName: string;
  firstName: string;
  departmentName: string;
  position: string;
  email: string;
  salary: string;
  joiningDate: Date;
  userPhoto: string;
};
export type LanguageType = {
  languageName: string;
  levelOfProficiency: string;
  countryPhoto: string;
};
export const LANGUAGE_MOCK_DATA: LanguageType = {
  languageName: "English",
  levelOfProficiency: "Intermediate",
  countryPhoto: "https://rainbowfilter.io/images/filters/american-flag/100x100.png",
};
export const INFO_MOCK_DATA: InfoType = {
  lastName: "Bill",
  firstName: "Duluu",
  departmentName: "Technology",
  position: "Software Developer",
  email: "duluu@gmail.com",
  salary: "12000",
  phoneNumber: "99112233",
  joiningDate: new Date(),
  userPhoto:
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
};

export const CHECKLIST_MOCK_DATA: CheckListMockType = {
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

export const ACHIEVEMENT_MOCK_DATA: AchievementListType[] = [
  {
    category: "skills",
    data: [
      { title: "HTML/CSS", rating: 3 },
      { title: "JavaScript", rating: 4 },
      { title: "React", rating: 6 },
      { title: "UI Design", rating: 4 },
      { title: "Problem solver", rating: 2 },
      { title: "Teamwork", rating: 7 },
    ],
  },
  {
    category: "certificates",
    data: [
      {
        companyName: "Amazon Web Service (AWS)",
        title: "AWS Certified DevOps Engineer - Professional",
        date: "2022 - 2025",
      },
      {
        companyName: "Microsoft Azure",
        title: "Microsoft Certified Azure Solutions Architect",
        date: "2018 - 2021",
      },
    ],
  },
  {
    category: "awards",
    data: [
      {
        date: "2015",
        title: "Art of the week",
        description:
          "Academic & Innovation awards recognize the contribution of a single individual (undergraduate or graduate) who has demonstrated academic excellence or displayed a creative initiative.",
      },
      {
        date: "2014",
        title: "Best Designer",
        description:
          "Academic & Innovation awards recognize the contribution of a single individual (undergraduate or graduate) who has demonstrated academic excellence or displayed a creative initiative.",
      },
    ],
  },
];

export const CHART_MOCK_DATA: ChartType = {
  salaryDetail: [
    {
      name: "Total Salary",
      total: "80",
    },
    {
      name: "Social Security wages",
      total: "10",
    },
    {
      name: "State tax",
      total: "5",
    },
    {
      name: "Medicare wages",
      total: "15",
    },
  ],
};
