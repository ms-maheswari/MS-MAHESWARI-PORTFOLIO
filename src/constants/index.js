import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Tailwind CSS, as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2023 - Oct 2023",
    role: "Web Developer Intern",
    company: "Zenanvibe",
    description: `Gained practical expertise in React Tailwind CSS for rapid styling.
    `,
    point2:"Mastered responsiveness to ensure seamless user experiences across various devices.",
    technologies: ["Javascript", "React.js", "Tailwind CSS"],
  },
  {
    year: "June 2023 - July 2023",
    role: "Web Developer Intern",
    company: "Qantler Technologies",
    description: `Gained extensive proficiency in validation, input types, JavaScript functions, styling.`,
    point2:"The creation of forms with validation and CRUD (Create, Read, Update, Delete) operations",
    technologies: ["Html","CSS","Javascript"],
  },
  {
    year: "March 2023 - May 2023",
    role: "Mern Stack Intern",
    company: "Nullclass",
    description: `Crafted and launched a responsive web application utilizing the MERN stack with user interaction`,
    point2:"Integrated user authentication and authorization functionalities, empowering users to securely establish accounts, log in, and oversee their profiles.",
    technologies: ["React", "Node.js","Express.js","MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Quotes Generator",
    image: project1,
    description:
      "The Quotes Generator App is a  application that fetches random inspirational quotes from an external API. ",
    point2 :"Users can click a button to load a new quote, providing a seamless and engaging experience.",
    technologies: ["React","Javascript","Tailwind CSS","API"],
    live: "https://quotes-generator-nu-two.vercel.app/",
    github:"https://github.com/ms-maheswari/Quotes-Generator",
  },
  {
    title: "Mind Scribe",
    image: project2,
    description:
      "The MindScribe Project is a feature-rich note-taking application that allows users to create, pin, and organize notes efficiently. ",
    point2 : "With a clean and intuitive interface, users can securely log in to access their notes, making it an ideal tool for personal or professional use.",
    technologies: ["React","Node.js","Express.js","MongoDB"],
    live: "https://mind-scribe-xi.vercel.app/",
    github: "https://github.com/ms-maheswari/Mind_Scribe",
  },
  {
    title: "Sonar Signal Classification",
    image: project3,
    description:
       "The Sonar Signal Classifier is a machine learning project aimed at classifying sonar signals as either rocks or mines.  This project can be integrated into a web interface where users can input sonar data and receive classification results",
    point2: "Using logistic regression, the model analyzes the sonar data to predict the classification.",
    technologies: ["Python", "Flask", "Scikit-learn", "NumPy", "Pandas"],
    live:" ",
    github:"https://github.com/ms-maheswari/Sonar-Signal-Classifier",
  },
  {
    title: "News Aggregator Website",
    image: project4,
    description:
      "The News Pulse Project is a responsive news aggregation website. It fetches the latest news based on different categories using the News API and presents them in a user-friendly layout. ",
      point2:"Users can explore various news categories such as sports, technology, and business.",
    technologies: ["React", "Tailwind CSS", "API"],
    live: "https://news-pulse-phi.vercel.app/",
    github: "https://github.com/ms-maheswari/NewsPulse",
  },
  {
    title: "Stack Overflow Clone",
    image: project5,
    description:
      "A platform where users can sign up, log in, and interact with a community by asking questions, providing answers, sharing posts, and more. ",
      point2: "The app includes a chatbot for assistance, email verification via OTP, and various membership plans offering different levels of access.",
    technologies: ["React.js","Node.js","Express.js","MongoDB","JWT","SMTP"],
    live: "https://stack-clone-frontend.vercel.app/",
    github: "https://github.com/ms-maheswari/stack-clone",
  },
];

export const CONTACT = {
  email: "mahes7439@gmail.com",
};

export const EDUCATION = [
  {
    year: "2021 - Present",
    std: "B.E - Computer Science",
    marks: "8.5 GPA",
    institute: "Francis Xavier Engineering College",
    place: "Tirunelveli",
  },
  {
    year: "2019 - 2021",
    std: "Higher Seconday",
    marks: "92%",
    institute: "St Ignatius Convent Hr. Sec. School",
    place: "Tirunelveli",
  },
  {
    year: "2018 - 2019",
    std: "SSLC",
    marks: "92%",
    institute: "Saratha Matriculation School",
    place: "Tirunelveli",
  },
];
