import Mock from "../mock";

const database = {
  information: {
    name: "Oualid EL HADAF",
    aboutContent:
      "Expertise Cyber Security Cloud System & Network & Full-Stack Developer.",
    age: 21,
    phone: "",
    nationality: "Moroccan ",
    language: "English, French, Arabe",
    email: "oualid.elhadaf@gmail.com",
    address: "Ile-de-france , France",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://www.facebook.com/walid.elhadaf.54",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/oualid-el-hadaf/",
      dribbble: "",
      github: "https://github.com/walidelhadaf",
      email:"oualid.elhadaf@gmail.com",
    },
    brandImage: "/images/me.jpeg",
    aboutImage: "/images/me.jpeg",
    aboutImageLg: "/images/me.jpeg",
    cvfile: "/files/oualid el hadaf cv p.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "brush-alt",
      details:
        "Figma , Canva ",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Javascript ,PHP ,HTML ,React ,NodeJS ,Typescript ,Python ,SQL ,MongoDB ,SQL Server ,WEBDEV ,Wordpress",
    },
    {
      title: "cyber security",
      icon: "shield",
      details:
        "Kubernetes ,Docker ,linux ,Nmap ,Whois ,Nikto",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: "Burdette Turner",
        designation: "Web Developer, Abc Company",
      },
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: "Susan Yost",
        designation: "Client",
      },
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: "Irving Feeney",
        designation: "Fiverr Client",
      },
    },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 70,
    },
    {
      title: "Node.js",
      value: 70,
    },
    {
      title: "ReactJS",
      value: 60,
    },
    {
      title: "MONGO DB",
      value: 65,
    },
    {
      title: "PHP",
      value: 65,
    },
    {
      title: "JAVA",
      value: 65,
    },
    {
      title: "WEBDEV(front)",
      value: 65,
    },
    {
      title: "C++",
      value: 50,
    },
    {
      title: "Kubernets",
      value: 65,
    },
    {
      title: "Docker",
      value: 65,
    },{
      title: "linux",
      value: 65,
    },
    {
      title: "Postman",
      value: 65,
    },
    {
      title: "Python",
      value: 65,
    },
    {
      title: "Typescript",
      value: 65,
    },
    {
      title: "SQL",
      value: 65,
    },
    {
      title: "Github / Gitlab",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Natours ",
      subtitle: "A website specialized in managing trips and adventures (not complete yet).",
      imageUrl: "/images/natours.png",
      largeImageUrl: [
        "/images/natours.png",
        "/images/natours1.png",
        "/images/natours2.png",
        "/images/natours3.png",
        "/images/natours4.png",

      ],
      url: "",
    },
    {
      id: 2,
      title: "ChatAPP",
      subtitle: "A small chat application between friends if on the same wifi.",
      imageUrl: "/images/chatAPP.png",
      url: "",
    },
    {
      id: 3,
      title: "Bee ONE ",
      subtitle: "Converting a computer application to a website and I have worked on the front end. And BeeOne is an application for managing fields in terms of workers, production and income.For AGRIDATA CONSULTING.",
      imageUrl: "/images/BeeOne-2.jpg",
      url: "https://www.agridata-consulting.com/products/beeone",
    },
    {
      id: 4,
      title: "OctiCard ",
      subtitle: "octicard which is related to ocitcode control and management program of company cards. I worked on some details in front end.",
      imageUrl: "/images/octicode.jpg",
      url: "",
    },
    {
      id: 5,
      title: "Case study of a multi-site infrastructure (Packet Tracer)",
      subtitle: "Complete design, configuration, and security of a complex network infrastructure for a company with a headquarters and multiple branches.",
      imageUrl: "/images/11.png",
      url: "",
    },
    {
      id: 6,
title: "DataOps CI/CD Pipeline with GitHub Actions for Data Optimization",
subtitle: "This project aims to automate a data processing (DataOps) pipeline using GitHub Actions for continuous integration and deployment (CI/CD). It includes: Data extraction, transformation and compression (Python scripts), Performance benchmarking and results visualization (Matplotlib), Automated workflows to test, deploy and monitor pipeline stages, Collaboration via GitHub (pull requests, version control).",
imageUrl: "/images/10.png", 
largeImageUrl: [
  "/images/10.png",
  "/images/20.jpg",
  "/images/30.jpg",
  "/images/40.jpg",
  "/images/50.jpg",
  "/images/60.jpg",
],
url: "",

    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "janv. 2024 - juil. 2024 ",
        position: "Full-Stack Developer and Expertise Cyber ​​Security Cloud System",
        company: "Octicode",
        details:
        `
        - Development of secure back-end services with Node.js and MongoDB.
- Implementation of secure authentication mechanisms, including OAuth2 and JWT.
- Management of secure REST APIs, ensuring reliable and secure communication between the front-end and back-end.
- Application of secure development best practices to prevent common attacks (SQL injections, XSS, CSRF).
- Hardening of systems and services through regular vulnerability audits and application of security patches.
- Use of cryptography to secure sensitive data and communications between services.
- Automation of security tests via penetration testing tools, using tools such as Metasploit, Burp Suite, and Nikto.
- Execution of penetration tests to identify security vulnerabilities and propose remediation measures. - Used **Kali Linux** to conduct advanced security analysis, including vulnerability exploitation and network attack management.
- Collaborated with the team to integrate monitoring and log management tools into back-end services.
- Participated in the continuous integration and secure deployment of applications.
- Worked as part of a team in an Agile environment, with regular iterations and a focus on application security.
      ` },
      {
        id: 2,
        year: "févr. 2023 - août 2023 ",
        position: "Full-Stack Developer",
        company: "Agridata Consulting",
        details: `
        - Full-stack web application development.
- Dynamic user interface design with React.js.
- Server-side functionality development with Node.js and Express.js.
- Secure REST API creation and consumption.
- Database management with MongoDB and MySQL.
- Use of Git for versioning and collaborative code management.
- Application of development best practices: Clean Code, Responsive Design, and basic application security.
- Teamwork using the Agile method (Scrum).
- Strengthening my front-end and back-end skills to prepare for future work-study placements in France.
        `,
                
    }
],
    educationExperience: [
      {
        id: 1,
        year: "2024- 2027",
        graduation: "Master(engineering degree) of cyber security",
        university: "ESTIAM , Paris",
        details:"Cisco CCNA Security, Mobile Application Development, Java C#, Advanced JavaScript, Business Intelligence, Agile Methods, Scrum, Server OS Administration...",
          
      },
      {
        id: 1,
        year: "2022 - 2024 ",
        graduation: "Technician specializing in full-stack  development  ",
        university: "Efet Agadir - French School Teaching Technique Agadir",
        details:
          "Mastery of programming languages, Database management, Technical assistance, Management of IT development projects, Mastery of IT tools and methodologies through practical experience in class and during internships, Coordination and teamwork, Ability to resolve business issues related to IT systems, Design, development and administration of websites, mobile applications",
      },
      {
        id: 2,
        year: "2020-2022",
        graduation: "Higher Schoold Graduation in physics and chemistry",
        university: "LAMSALA",
        details:
          "",
        },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Biographie de Oualid El Hadaf – Étudiant en Cybersécurité en France.",
      featuredImage: "/images/blog1.png",
      filesource: "../../blog/Biographie-de-Oualid-El-Hadaf.md",
      createDay: "23",
      createMonth: "septembre",
      createYear: "2024",
    },
    
  ],
  contactInfo: {
    phoneNumbers: ["+33 768232373", ""],
    emailAddress: ["oualid.elhadaf@gmail.com"],
    address: "paris/ ile de france "
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
