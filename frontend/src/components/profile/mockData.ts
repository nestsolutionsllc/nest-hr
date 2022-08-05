import {
  InfoType,
  SkillItemType,
  CertificateItemType,
  AwardItemType,
  CheckListMockType,
  ChartType,
  LanguageItemType,
} from "./type";

export const LANGUAGE_MOCK_DATA: LanguageItemType[] = [
  {
    languageName: "English",
    levelOfProficiency: "Intermediate",
    countryPhoto: "https://rainbowfilter.io/images/filters/american-flag/100x100.png",
  },
  {
    languageName: "German",
    levelOfProficiency: "Advanced",
    countryPhoto: "https://pbs.twimg.com/profile_images/2678665488/9e78670e3b08784bdf651918389e31fb_400x400.jpeg",
  },
];
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

export const SKILL_MOCK_DATA: SkillItemType[] = [
  { title: "HTML/CSS", rating: 3 },
  { title: "JavaScript", rating: 4 },
  { title: "React", rating: 6 },
  { title: "UI Design", rating: 4 },
  { title: "Problem solver", rating: 2 },
  { title: "Teamwork", rating: 7 },
];

export const CERTIFICATE_MOCK_DATA: CertificateItemType[] = [
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
];

export const AWARD_MOCK_DATA: AwardItemType[] = [
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
