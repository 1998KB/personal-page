import project1 from "./Images/project1.jpg";
import project2 from "./Images/project2.jpeg";
import project3 from "./Images/project3.jpeg";
import project4 from "./Images/project4.jpeg";
import project5 from "./Images/project5.jpg";
import project6 from "./Images/project6.jpg";
import project7 from "./Images/project7.jpg";
import project8 from "./Images/project8.jpeg";
import project9 from "./Images/project9.png";
import Typescript from "./Images/techIcons/typescript.png";
import Expo from "./Images/techIcons/expo.png";
import Tailwind from "./Images/techIcons/tailwind.png";
import Native from "./Images/techIcons/reactnative.png";
import React from "./Images/techIcons/react.png";
import Firebase from "./Images/techIcons/firebase.png";
import Express from "./Images/techIcons/express.png";
import Figma from "./Images/techIcons/figma.png";
import Java from "./Images/techIcons/java.png";
import Azure from "./Images/techIcons/azure.png";
import Spline from "./Images/techIcons/spline.png";
import Springboot from "./Images/techIcons/springboot.png";
import Node from "./Images/techIcons/node.png";
import Mui from "./Images/techIcons/mui.png";
import SQL from "./Images/techIcons/sql.png";
import Html from "./Images/techIcons/html.png";
import Css from "./Images/techIcons/css.png";
import OpenAi from "./Images/techIcons/openai.png";
import Cypress from "./Images/techIcons/Cypress.png";
import Mocha from "./Images/techIcons/Mocha.png";
import Junit5 from "./Images/techIcons/Junit.png";
import Hibernate from "./Images/techIcons/Hibernate.png";
import MongoDB from "./Images/techIcons/MongoDB.png";
import MySQL from "./Images/techIcons/MySQL.png";
import PostgreSQL from "./Images/techIcons/PostgeSQL.png";
import Npm from "./Images/techIcons/npm.png";
import OOP from "./Images/techIcons/OOP.png";
import TDD from "./Images/techIcons/TDD.png";
import FP from "./Images/techIcons/lambda.png";
import GitHubGradient from "./Images/techIcons/GitGradient.png";
import NoSQL from "./Images/techIcons/NoSQL.png";
import Lombock from "./Images/techIcons/Lombock.png";
import Scrum from "./Images/techIcons/scrum.png";
import Agile from "./Images/techIcons/Agile.png";
import Copilot from "./Images/techIcons/Copilot.png";
import VSCode from "./Images/techIcons/VSCode.png";
import Webstorme from "./Images/techIcons/Webstorme.png";
import IntelliJ from "./Images/techIcons/IntelliJ.png";
import Api from "./Images/techIcons/api.png";
import Maven from "./Images/techIcons/Maven.png";

export const projects = [
  {
    name: "Join Spline Art ",
    description: `Animated 3D models & design (desktop verion) of welcome page to Spline tool.`,
    image: project9,
    technology: [
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "Spline", icon: Spline },
    ],
    link: "https://spline-art.vercel.app",
  },
  {
    name: "AI Chatbots App",
    description: `Androind & IOS phone application. Three different chatbot AI-powered, speach-to-text and text-to-speach integration.`,
    image: project8,
    technology: [
      { name: "Expo", icon: Expo },
      { name: "Tailwind", icon: Tailwind },
      { name: "React Native", icon: Native },
      { name: "TypeScript", icon: Typescript },
    ],
    gitF: "https://github.com/CodeOnBoat/WiseMaster.git",
  },
  {
    name: "Convileo",
    description:
      "Event search website. Google maps and Stripe integration. I contributed as a full-stack developer and prompt designer.",
    image: project5,
    technology: [
      { name: "TypeScript", icon: Typescript },
      { name: "Express", icon: Express },
      { name: "NoSQL", icon: NoSQL },
      { name: "React", icon: React },
      { name: "Mui", icon: Mui },
      { name: "Firebase", icon: Firebase },
    ],
    gitF: "https://github.com/CodeOnBoat/convileo",
    gitB: "https://github.com/CodeOnBoat/convileo-backend",
    link: "https://convileo-cb5be.web.app/",
  },
  // {
  //   name: "Producteers",
  //   description:
  //     "Software company that offers IT services. I developed the website.",
  //   image: "project6",
  //   technologies: [
  //     { name: "Firebase", icon: Firebase },
  //     { name: "React", icon: React },
  //     { name: "Node", icon: Node },
  //     { name: "TypeScript", icon: TypeScript },
  //   ],
  //   gitF: "https://github.com/1998KB/NeuroArt/tree/main/frontend",
  //   liveDemo: "https://producteers-2f010.web.app",
  // },
  {
    name: "Rocket Team",
    description:
      "I designed and developed this web to offer IT services. I implemented 3D models and worked as a copywriter.",
    image: project7,
    technology: [
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "Tailwind", icon: Tailwind },
      { name: "Firebase", icon: Firebase },
      { name: "Figma", icon: Figma },
    ],
    gitF: "https://github.com/CodeOnBoat/rocketteam",
    link: "https://www.rocket-team.space/",
  },
  {
    name: "NeuroArt",
    description:
      "AI-driven image generator with DALL-E. I worked as a full-stack developer and designer.",
    image: project1,
    technology: [
      { name: "Java", icon: Java },
      { name: "SpringBoot", icon: Springboot },
      { name: "SQL", icon: SQL },
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "CSS", icon: Css },
      { name: "Azure", icon: Azure },
    ],
    gitF: "Frontend GitHub",
    gitB: "Backend GitHub",
    liveDemo: "Live Demo",
  },
  {
    name: "TaskWise",
    description:
      "AI-enhanced task management app with guided projects. I contributed as a full-stack developer.",
    image: project2,
    technology: [
      { name: "TypeScript", icon: Typescript },
      { name: "Express", icon: Express },
      { name: "NoSQL", icon: NoSQL },
      { name: "React", icon: React },
      { name: "CSS", icon: Css },
      { name: "Firebase", icon: Firebase },
    ],
    gitF: "Frontend GitHub",
    gitB: "Backend GitHub",
    link: "Visit TaskWise",
  },
  {
    name: "Iconic",
    description:
      "Responsive web solution for a beauty salon, featuring booking and directions. I worked as a full-stack developer.",
    image: project3,
    technology: [
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "CSS", icon: Css },
      { name: "Firebase", icon: Firebase },
    ],
    gitF: "Frontend GitHub",
    link: "https://iconicbrowsandbeauty.se",
  },
  {
    name: "Crypto Wallet",
    description:
      "Secure backend developed with Spring Security for safeguarding cryptocurrencies. I served as a backend developer.",
    image: project4,
    technology: [
      { name: "Java", icon: Java },
      { name: "SpringBoot", icon: Springboot },
    ],
    gitB: "Backend GitHub",
  },
];

export const timelineData = [
  {
    title: "My Story",
    subtitle: "Synossis",
    body: "I am 25 years old guy from Albania and I am currently livining in Sweden. I like nature, travels, sports and being around proactive people in positive environments.",
  },
  {
    title: "Mindset",
    subtitle: "Travels & Goals",
    body: "I am an open-minded individual. I've lived and travelled in sevelar countries where I've encountered diverse lifestyles. Each one taught me different ways of conceiving life. I continuously try to improve myself, grow, and learn. I enjoy setting high expectations and writing down plans to how achive it.",
  },
  {
    title: "Soft Skills",
    subtitle: "Teaching & People",
    body: "As a polyglot, I've not only learnt languages, but also acquired keys to understanding diverse people. Teaching languages to children has imporve my ability to interact with different personalities under stress level. This journey has also considerably improved my public speaking skills.",
  },
  {
    title: "Technical Skill",
    subtitle: "Software Developer",
    body: "Backend, frontend, or even UI/UX design, I enjoy problem-solving, it more than just a job it's a lifestyle. I am a quick learner and always curious and intersted to learn new concepts or technologies.",
  },
  {
    title: "Tools & Technologies",
    subtitle: "General",
    body: "Programming languages, tools, technologies & development methodologies. ",
    stack: [
      { name: "Typescript", icon: Typescript },
      { name: "Java", icon: Java },
      { name: "REST", icon: Api },
      { name: "TDD", icon: TDD },
      { name: "OOP", icon: OOP },
      { name: "FP", icon: FP },
      { name: "NPM", icon: Npm },
      { name: "Firebase", icon: Firebase },
      { name: "Azure", icon: Azure },
      { name: "GitHub", icon: GitHubGradient },
      { name: "IntelliJ", icon: IntelliJ },
      { name: "WebStorme", icon: Webstorme },
      { name: "VSCode", icon: VSCode },
      { name: "Copilopt", icon: Copilot },
      { name: "OpenAI", icon: OpenAi },
      { name: "Agile", icon: Agile },
      { name: "Scrum", icon: Scrum },
    ],
  },
  {
    title: "Development Skills",
    subtitle: "Backend",
    body: "Backend and testing frameworks, databases for data collection.  ",
    stack: [
      { name: "Springboot", icon: Springboot },
      { name: "Maven", icon: Maven },
      { name: "Lombock", icon: Lombock },
      { name: "Express", icon: Express },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MySQL", icon: MySQL },
      { name: "NoSQL", icon: NoSQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "Hibernate", icon: Hibernate },
      { name: "JUnit5", icon: Junit5 },
      { name: "Mocha", icon: Mocha },
    ],
  },
  {
    title: "Development Skills",
    subtitle: "Frontend",
    body: "Frontend and testing frameworks, styling technologies & desining tools.",
    stack: [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "React", icon: React },
      { name: "Tailwind", icon: Tailwind },
      { name: "Mui", icon: Mui },
      { name: "Native", icon: Native },
      { name: "Expo", icon: Expo },
      { name: "Figma", icon: Figma },
      { name: "Spline", icon: Spline },
      { name: "Cypress", icon: Cypress },
    ],
  },

  {
    title: "Team Work",
    subtitle: "Athlete & Mob Programming",
    body: "I've played football for 17 years, team collaboration has been central to my life. Through this journey, I developed discipline, body and mind awarenes. I also learned that significant achievements are a result of team efforts as in a football or development team. ",
  },
  {
    title: "Rational Thinking",
    subtitle: "Chemical Technician",
    body: "My background in applied mathematics, and the hours spent in a chemical lab, taught me to have a rational approach behind every the fact. There's predictable process behind each phenomenon, which I find fascinating to discover.",
  },
  {
    title: "Critical Thinking",
    subtitle: "BA Literature & Philosophy",
    body: "My academic years were filled with countless books, each introducing unique perspectives on a concept or idea. These experiences have instilled in me the importance of selecting the right words to use, and pay deep attention to the what other people says and thinks.",
  },
];
