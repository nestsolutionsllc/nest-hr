import {
  InfoType,
  AchievementListType,
  CheckListMockType,
  ChartType,
  SalaryTableType,
  SalaryTableHeaderType,
  LadderCommentListType,
} from "./type";

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
  {
    category: "languages",
    data: [
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

export const SALARY_TABLE_MOCK_DATA: SalaryTableType = [
  {
    name: "Tom",
    position: "Manager",
    salary: 1500000,
    workdays: 19,
    workedDays: 19,
    raise: 0,
    calculatedSalary: 1500000,
    socialInsurance: 165000,
    PIT: 123500,
    prePayment: 600750,
    otherDeduction: 0,
    totalDeduction: 0,
    salaryAtHand: 0,
  },
];

export const SALARY_TABLE_HEADER_MOCK_DATA: SalaryTableHeaderType = [
  "Name",
  "Position",
  "Income",
  "Work Days",
  "Days Worked",
  "Bonus",
  "Expected Salary",
  "Social Security Deductions",
  "PIT",
  "Pre Payment",
  "Other Deductions",
  "Total Deductions",
  "Salary Up Front",
];
export const COMMENT_MOCK_DATA: LadderCommentListType = {
  commentData: [
    {
      img: "https://cdn5.shoppy.mn/img/112064/840x0xwebp/nnn.png?h=cdbe20dde8803634a7cb27219a945b52ef0208b3",
      name: "urana",
      category: "Technology",
      comment:
        "Lorem Iim Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      img: "https://cdn5.shoppy.mn/img/112070/840x0xwebp/hhhhhhhhhhhhh.png?h=cdbe20dde8803634a7cb27219a945b52ef0208b3",
      name: "Matar",
      category: "System",

      comment:
        " Lorem Ipsum i took a galley of type and scrambled it to make a type specimen book. It has sries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ",
    },
    {
      img: "https://cdn3.shoppy.mn/spree/images/1326825/product/open-uri20220506-3073495-momk26.",
      name: "someOne",
      category: "People",
      comment: "good 1960s with thining Lorem Ipsum passages, and moreof Lorem Ipsum.",
    },
  ],
};
