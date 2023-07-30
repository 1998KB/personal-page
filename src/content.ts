import project1 from "./Images/project1.jpg";
import project2 from "./Images/project2.jpeg";
import project3 from "./Images/project3.jpeg";
import project4 from "./Images/project4.jpeg";
export const projects = [
  {
    name: "NeuroArt",
    description: `NeuroArt is an AI-driven image generator that aids in crafting compelling art. Developed with DALL-E, it offers a unique feature of writing the prompt for optimal outcomes. You can draw inspiration from others and share your masterpieces. My role was a full-stack developer and designer.`,
    image: project1,
    technology: ["Java", "SpringBoot", "TypeScript", "React", "Azure"],
    gitF: "https://github.com/1998KB/NeuroArt/tree/main/frontend",
    gitB: "https://github.com/1998KB/NeuroArt/tree/main/backend",
    liveDemo:
      "https://drive.google.com/file/d/1IZoZ_ku9NMlmE8tKW2zDpf2KiQOT2NG6/view",
  },

  {
    name: "TaskWise",
    description: `TaskWise is an AI-enhanced task management app. It features an AI assistant that guides you through your project and conducts research for you. Its user-friendly interface coupled with AI efficiency maximizes productivity. I served as a full-stack developer.`,
    image: project2,
    technology: ["Firebase", "Express", "React", "Node", "TypeScript"],
    gitF: "https://github.com/CodeOnBoat/Project-Manager-App-Frontend",
    gitB: "https://github.com/CodeOnBoat/Project-Manager-App-Backend",
    link: "https://taskwise.pro/",
  },
  {
    name: "Iconic",
    description: `Iconic is a responsive web solution for a beauty salon. It seamlessly integrates booking, directions, and offers in a simple, user-friendly design. Although industry-specific features are limited, its focus on accessibility and responsiveness makes it stand out. I worked as a full-stack developer.`,
    image: project3,
    technology: ["React", "TypeScript", "Firebase"],
    gitF: "https://github.com/CodeOnBoat/iconic-browse-and-beuty",
    link: "https://iconicbrowsandbeauty.se/",
  },
  {
    name: "Crypto Wallet",
    description: `Crypto Wallet is a secure backend developed using Spring Security. It safeguards your cryptocurrencies and grants user permissions effectively. Although it may not offer many unique features, its focus on security is paramount. I served as a backend developer for this project.`,
    image: project4,
    technology: ["Java", "SpringBoot"],
    gitB: "https://github.com/1998KB/cryptoWallet-springBackend",
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
