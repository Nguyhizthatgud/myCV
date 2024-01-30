import React, { Component } from 'react'

import './test.css';
import CV from 'react-cv'


function App() {
  const data = {
    name: 'John Doe',
    title: 'Software Engineer',
    description: 'Experienced software engineer with a passion for building scalable and maintainable systems.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    education: [
      {
        institution: 'University of XYZ',
        degree: 'Bachelor of Science in Computer Science',
        year: '2015-2019'
      }
    ],
    workExperience: [
      {
        company: 'ABC Company',
        position: 'Software Engineer',
        year: '2019-present',
        description: 'Developed and maintained web applications using React and Node.js.'
      }
    ]
  }
  return (
    <div className="App">
      <CV


        personalData={{
          name: 'Duc Huy Nguy',
          title: 'Nominee: Intern Front-end Developer',

          image: '1.png',
          contacts: [
            { type: 'email', value: 'nguyh432@gmail.com' },
            { type: 'phone', value: '(+84)835-041-798' },
            { type: 'location', value: 'Thu Duc District, HCM  City, Vietnam' },
            { type: 'linkedin', value: 'linkedin.com/in/huy-nguy-654b9628b' },
            { type: 'github', value: 'github.com/Nguyhizthatgud' }
          ]
        }}
        sections={[
          {
            type: 'common-list',
            title: 'Overview',
            items: [ // Array of Objects(type:common-list) or Array of Strings(type:tag-list)
              {
                title: 'HCMC University of Technology and Education',
                authority: 'Major - Electronics and Communication Engineering',
                description: 'There are two main research directions about very large-scale integration design and embedded IoT systems. The project design for "**the parallel transmission parity checker**" received a 9/10. For the embedded system with a "**smart home device built-in controllable system**" to solve the problem of connection conflict and driver for plug-and-play devices used in graduate theses. The system user interface and back-end for data storage were designed scientifically and user-friendly, using the knowledge mentioned below and listed in detail in the Project section.',
                rightSide: 'July 2016 - April 2024',
              },
              {
                authority: 'Knowledge',
                description: '\n\n- Acquainted with Front-end frameworks and libraries (React, MUI design, Ant Design). \n\n-  Can uses Javascript ES6, React Hooks to manipulate DOM in developing projects. \n\n- Familiarity with many extensions like ES7 snippets and the JSX compiler (Babel REPL) to code faster. \n\n- Design and implement RESTful APIs, using NodeJS (ExpessJS, NoSQL (MongoDB), and JWT Auth. ',
                items: ['React', 'Javascript', 'CSS', 'NoSQL', 'express']
              },

              {
                type: 'tag-list',
                authority: 'Languages',
                description: '\n\n- English \n\n- Chinese (Mandarin)',
              },
              {
                authority: 'Level - Average',
                authorityMeta: 'GPA - 6.32',
              },
            ],
            icon: 'usertie'

          },
          {
            type: 'tag-list',
            title: 'Skills',
            icon: 'book',
            items: ['React', 'Javascript', 'CSS', 'NoSQL', 'Express']
          },

          {
            type: 'projects-list',
            title: 'Projects',
            icon: 'tasks',
            groups: [
              {
                sectionHeader: 'Projects list',
                description: ' The list of projects is described at github, which is listed in the papers contact page. Click the link for further details.',
                items: [
                  { title: 'How2House (03/2023 - 05/2023)', projectUrl: 'Nguyhizthatgud/Iot.git', description: '**Use of Knowledge**: HTML, CSS, JavaScript, Google Firebase \n\n- **Descriptions**: The static website presenting a webpage adjusted to control system statistics displayed in real time. \n\n **Number of members**: 1 \n\n **Position**: Developer, Hardware architect \n\n **Technology in use**: +Front-end: HTML, CSS \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Back-end: Google Firebase' },

                  { title: 'Graduation Thesis - Smart indoor plug-and play device monitoring and control system (09/2023 - 01/2024) ', projectUrl: 'optional', description: '**Use of Knowledge**: ReactJS, Front-end framework, Nodejs, Express, MongoDB, WebSocket, Face-Api \n\n- **Descriptions**: The dynamic webpage presents a webpage that is updated to show real-time system statistics with environmental data and users credential  will be kept at a virtual address. \n\n **Number of members**: 1 \n\n **Position**: Developer, Hardware architect \n\n **Technology in use**: +Frontend: ReactJS, User biometric face-id \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Back-end:  NodeJS, Websocket, MongoDB \n\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+Hardware: Esp32 WebSocket Client' }
                ]
              }
            ]
          },

        ]}

        branding={false} // or false to hide it.
      />
    </div>
  );
}

export default App;



