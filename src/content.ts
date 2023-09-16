import project1 from "./Images/project1.jpg";
import project2 from "./Images/project2.jpeg";
import project3 from "./Images/project3.jpeg";
import project4 from "./Images/project4.jpeg";
import project5 from "./Images/project5.jpg";
import project6 from "./Images/project6.jpg";
import project7 from "./Images/project7.jpg";
import project8 from "./Images/project8.jpeg";
import project9 from "./Images/project9.jpeg";
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

export const projects = [
  {
    name: "Join Spline Art ",
    description: `Animated 3D models & design (desktop verion) of welcome page to Spline tool.`,
    image: project9,
    technology: [
      { name: "Spline", icon: Spline },
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
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
      { name: "Firebase", icon: Firebase },
      { name: "Express", icon: Express },
      { name: "React", icon: React },
      { name: "Node", icon: Node },
      { name: "TypeScript", icon: Typescript },
      { name: "Mui", icon: Mui },
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
      { name: "Figma", icon: Figma },
      { name: "Firebase", icon: Firebase },
      { name: "React", icon: React },
      { name: "Node", icon: Node },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind", icon: Tailwind },
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
      { name: "TypeScript", icon: Typescript },
      { name: "React", icon: React },
      { name: "Azure", icon: Azure },
      { name: "SQL", icon: SQL },
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
      { name: "Firebase", icon: Firebase },
      { name: "Express", icon: Express },
      { name: "React", icon: React },
      { name: "Node", icon: Node },
      { name: "TypeScript", icon: Typescript },
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
      { name: "React", icon: React },
      { name: "TypeScript", icon: Typescript },
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
    title: "Mindset",
    subtitle: "Travels & Goals",
    body: "I am an open-minded and upbeat individual. Having extensively traveled across Europe and South America, I've encountered diverse lifestyles, all of which I find equally captivating. I continuously strive to better myself, grow, and learn. I enjoy setting high expectations as I see life as a mental game that I aim to win.",
  },
  {
    title: "Team Work",
    subtitle: "Athlete",
    body: "Having played football for 17 years, team collaboration has been central to my life. Through this journey, I developed discipline, body and mind awareness. I also learned that significant achievements are a result of outstanding team efforts.",
  },
  {
    title: "Rational Thinking",
    subtitle: "Chemical Technician",
    body: "My background in applied mathematics and hours of experience in organic and analytical chemistry labs taught me the rational approach behind every observed fact. There's a specific, predictable process behind each phenomenon, which I find fascinating to uncover.",
  },
  {
    title: "Critical Thinking",
    subtitle: "BA Literature and Philosophy",
    body: "My academic years were filled with countless books, each introducing unique and often contrasting perspectives on a concept or idea. These experiences have instilled in me a deep sense of prudence in selecting my words and an attentive ear to others' viewpoints.",
  },
  {
    title: "Technical Skill",
    subtitle: "Software Developer",
    body: "As a full-stack developer, my knowledge may not encompass every technology currently available, but rest assured, I am quick to learn what's necessary. Backend, frontend, or even UI/UX design—I enjoy problem-solving and consider it more than just a job, it's my lifestyle.",
  },
  {
    title: "Soft Skills",
    subtitle: "Teaching & People",
    body: "As a polyglot, I've not only learnt languages, but also acquired keys to understanding diverse souls. Teaching languages to children has honed my ability to interact with different personalities under varying stress levels. This journey has also considerably improved my public speaking skills.",
  },
];
