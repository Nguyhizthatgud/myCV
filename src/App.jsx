import React, { Component } from "react";

import "./test.css";
import CV from "react-cv";

function App() {
  const data = {
    name: "John Doe",
    title: "Software Engineer",
    description: "Experienced software engineer with a passion for building scalable and maintainable systems.",
    skills: ["JavaScript", "React", "Node.js", "Python"],
    education: [
      {
        institution: "University of XYZ",
        degree: "Bachelor of Science in Computer Science",
        year: "2015-2019"
      }
    ],
    workExperience: [
      {
        company: "ABC Company",
        position: "Software Engineer",
        year: "2019-present",
        description: "Developed and maintained web applications using React and Node.js."
      }
    ]
  };
  return (
    <div className="App">
      <CV
        personalData={{
          name: "Duc Huy Nguy",
          title: "Intern Web Developer",

          image: "1.png",
          contacts: [
            { type: "email", value: "nguyh432@gmail.com" },
            { type: "phone", value: "(+84)835-041-798" },
            { type: "location", value: "Thu Duc District, HCM  City, Vietnam" },
            { type: "linkedin", value: "linkedin.com/in/huy-nguy-654b9628b" },
            { type: "github", value: "github.com/Nguyhizthatgud" }
          ]
        }}
        sections={[
          {
            type: "common-list",
            title: "Overview",
            items: [
              // Array of Objects(type:common-list) or Array of Strings(type:tag-list)
              {
                title: "HCMC University of Technology and Education",
                authority: "Major - Electronics and Communication Engineering",
                description:
                  "Possessing an understanding of computer networks, network object protocols, and telecommunications background. I work on developing my web development abilities, CSR and SSR, and the skill set listed below."
              },
              {
                authority: "Knowledge",
                description:
                  "\n\n- Acquainted with Front-end frameworks and libraries (React, MUI design, Ant Design). \n\n-  Can uses Javascript ES6, React Hooks to manipulate DOM in developing projects. \n\n- Familiarity with many extensions like ES7 snippets and the JSX compiler (Babel REPL) to code faster. \n\n- Design and implement RESTful APIs, using NodeJS (ExpessJS, NoSQL (MongoDB), and JWT Auth. "
              },

              {
                type: "tag-list",
                authority: "Languages",
                description: "\n\n- English (TOEIC - 795) \n\n- Chinese (HSK 4)"
              }
            ],
            icon: "usertie"
          },
          {
            type: "tag-list",
            title: "Technical Skills",
            icon: "book",
            items: [
              "Programming Languages: JavaScript, HTML, CSS, NodeJS",
              "Front-end: React, MUI design, Ant Design",
              "Back-end: NodeJS, ExpressJS, MongoDB",
              "Database: MongoDB",
              "Version-Control/Tools: Git, Postman, VSCode",
              "Others: Websocket, JWT Auth, RESTful API",
              "IoT: Esp32, Arduino, Raspberry Pi"
            ]
          },

          {
            type: "projects-list",
            title: "Projects",
            icon: "tasks",
            groups: [
              {
                sectionHeader: "Projects list",
                description:
                  " The list of projects is described at github, which is listed in the papers contact page. Click the link for further details.",
                items: [
                  {
                    title: "How2House (03/2023 - 05/2023)",
                    projectUrl: "Nguyhizthatgud/Iot.git",
                    description:
                      "**Use of Knowledge**: HTML, CSS, JavaScript, Google Firebase \n\n- **Descriptions**: The static website presenting a webpage adjusted to control system statistics displayed in real time. \n\n **Number of members**: 1 \n\n **Position**: Developer, Hardware architect \n\n **Technology in use**: +Front-end: HTML, CSS \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Back-end: Google Firebase"
                  },

                  {
                    title:
                      "Graduation Thesis - Smart indoor plug-and play device monitoring and control system (09/2023 - 01/2024) ",
                    projectUrl: "optional",
                    description:
                      "**Use of Knowledge**: ReactJS, Front-end framework, Nodejs, Express, MongoDB, WebSocket, Face-Api \n\n- **Descriptions**: The dynamic webpage presents a webpage that is updated to show real-time system statistics with environmental data and users credential  will be kept at a virtual address. \n\n **Number of members**: 1 \n\n **Position**: Developer, Hardware architect \n\n **Technology in use**: +Frontend: ReactJS, User biometric face-id \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Back-end:  NodeJS, Websocket, MongoDB \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Hardware: Esp32 WebSocket Client"
                  },
                  {
                    title: "WheretheWheather(02/2024) ",
                    projectUrl: "optional",
                    description:
                      "**Use of Knowledge**: NextJS, Tailwind, OpenWheatherAPI, ChartJS \n\n- **Descriptions**: The dynamic website that uses data retrieved from OpenWheaterAPI to provide forecasted wheater conditions on a daily basis. \n\n **Number of members**: 1 \n\n **Position**: Developer \n\n **Technology in use**: NextJS, Typyscript, tailwind, ChartJS"
                  },
                  {
                    title: "Redundant Library(04/2024) ",
                    projectUrl: "optional",
                    description:
                      "**Use of Knowledge**: NextJS, Tailwind, NodeJS, MongoDB, nginx, PM2 \n\n- **Descriptions**: a full-stack project that is Internet-deployed, enables CRUD book data, and lets users manage book libraries \n\n **Number of members**: 1 \n\n **Position**: Developer \n\n **Technology in use**:   +Front-end: NextJS, tailwind, Ant Design \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Back-end: NodeJS, Express, MongoDB \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Tools: Nginx, PM2"
                  }
                ]
              }
            ]
          }
        ]}
        branding={false} // or false to hide it.
      />
    </div>
  );
}

export default App;
