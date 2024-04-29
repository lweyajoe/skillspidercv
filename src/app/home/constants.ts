import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "J. Lweya",
    summary:
      "Currently: financial due diligence and executing for investment ventures in agric. value chains in E. Africa. Experience in: accounting systems, ERPs, financial analysis, data analytics and implementing enterprise software. Tools I use: PowerBi, Ms Excel, Tableau, Google Data Studio, Apache. Other skills: Software dev. (Python - Django, Flask; JS - NextJS, React; PHP etc)",
    email: "donotreply@gmail.com",
    phone: "123-456-7890",
    location: "Nairobi, KE",
    url: "https://linkedin.com/in/joseph-lweya-03bb8321",
  },
  workExperiences: [
    {
      company: "Tad Capital & Investments Ltd - Kampala, Uganda",
      jobTitle: "Business Analyst",
      date: "Feb 2023 to Mar. 2024",
      descriptions: [
        "Agri-Finance",
        "Business Strategy",
        "Smart Capital Placing",
      ],
    },
    {
      company: "Datalytika - Nairobi, Kenya",
      jobTitle: "Solutions Architect (Data) ",
      date: "Jan. 2022 to Dec. 2022",
      descriptions: [
        "ECommerce Dev.",
        "Data Science & Analytics",
      ],
    },
    {
      company: "AJ Capital & Investments LLC - Dubai, UAE.",
      jobTitle: "Investment Analyst",
      date: "Mar. 2020 to Dec. 2021",
      descriptions: [
        "Analysis and Financial Modeling",
        "Budgeting and Investment Decision",
      ],
    },
    {
      company: "Cytonn Investments Management Ltd - Nairobi, Kenya",
      jobTitle: "Associate Financial Advisor",
      date: "Mar. 2020 to Dec. 2021",
      descriptions: [
        "Business development",
        "Deal origination",
      ],
    },
    {
      company: "Squarehaul Ltd - Nairobi, Kenya",
      jobTitle: "Accounts Ass. - Cash, Finance and Ops. ",
      date: "Jan 2014 to May 2018",
      descriptions: [
        "Revenue monitoring",
        "Auto-settlement updates with PSPs",
      ],
    },    
  ],
  educations: [
    {
      school: "Holberton School",
      degree: "ALX-AFRICA Graduate Program, Computer Software Engineering",
      date: "Jun 2022 - Dec 2023",
      gpa: "",
      descriptions: [
       "",
      ],
    },
    {
      school: "Corporate Finance Institute (CFI)",
      degree: "Financial Modeling and Valuations Analyst",
      date: "Jan 2022 - Jul 2022",
      gpa: "",
      descriptions: [
       "",
      ],
    },
    {
      school: "KCA University",
      degree: "CPA (K)",
      date: "Jan 2009 - Dec 2009",
      gpa: "",
      descriptions: [
       "",
      ],
    },
    {
      school: "Starehe Boys' Centre and School",
      degree: "High School Diploma",
      date: "Jan 2005 - Dec 2008",
      gpa: "",
      descriptions: [
       "",
      ],
    },
  ],
  projects: [
    {
      project: "SkillSpiderCV",
      date: "ALX BootCamp 2024",
      descriptions: [
        "Created and launched a free resume builder web app that allows thousands of users to create professional resume easily and land their dream jobs",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "Python", rating: 4 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
