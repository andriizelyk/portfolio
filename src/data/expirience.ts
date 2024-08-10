import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaHouseLock } from "react-icons/fa6";
import { SiAmazonroute53 } from "react-icons/si";

export const experiencesData = [
  {
      "title": "Senior Software Engineer at ArgusMedia",
      "location": "Dnipro, UA - Remote",
      "description": "In my current role, I am part of the team responsible for the core components of the company, including the main business pipeline, user management, and executing email campaigns to a large subscriber base. Faced with managing a heavy and expensive infrastructure for numerous services, I spearheaded the transition to a serverless architecture. This strategic move significantly reduced our infrastructure costs and provided a more agile solution. As a result, applications responded more quickly to changes in service load, leading to improved efficiency and cost savings. Additionally, I have been involved in disaster recovery implementation, building new and updating existing CI/CD infrastructure and processes, and mentoring newcomers. This role has allowed me to contribute significantly to enhancing the efficiency, security, and resilience of core services to the top.",
      "icon": React.createElement(CgWorkAlt),
      "date": "03/2022 - present",
      "tags": ["C#", "SQL", "Dapper", "NUnit", "dotnet core 6+", "ASP .Net MVC", "minial API", "React", "TeamCity", "GitHub actions", "Octopus", "AWS"]
  },
  {
      "title": "Senior Software Engineer at Namecheap",
      "location": "Dnipro, UA - Remote",
      "description": "I worked on developing and improving a platform related to domain operations. Our team was responsible for creating software to replace an existing monolithic legacy platform, ensuring it could efficiently handle the selling of domain names while adhering to all ICANN rules. As a developer, my responsibilities included extending backend features and updating the user interface to enhance functionality and user experience. I also focused on writing unit and integration tests to ensure the reliability and quality of our software. This role required close attention to detail and a deep understanding of both backend processes and frontend design, allowing me to contribute to a robust and user-friendly domain management platform.",
      "icon": React.createElement(SiAmazonroute53),
      "date": "03/2021 - 12/2021",
      "tags": ["C#", "SQL", "EntityFramework", "Dapper", "NUnit", ".Net core", "ASP .Net MVC", "React", "TeamCity", "AWS"]
  },
  {
      "title": "Software Engineer at SSA",
      "location": "Dnipro, UA - Remote",
      "description": "I was focused on developing and improving the locking system platform for Swedish customers. My responsibilities included gathering requirements to understand the specific needs and designing and implementing a distributed system that met those needs. This involved creating and managing the database, developing the API, and ensuring seamless integration across the system. One of the most challenging tasks was responding to microservices downtime in a timely manner. As the number of services continuously grew, I implemented a dashboard to display the health check results of each microservice. This provided a clear, visible state of each service and its specific resources. With this solution, the team reacts more quickly to emergencies, significantly enhancing the platform's stability. One of the team's accomplishments was successfully integrating one of the services with emergency services. This integration proved invaluable when customer support reported that an ambulance was able to reach a person locked at home and in need of urgent medical help. This experience underscored the real-world impact of our work and highlighted the importance of reliable system design and implementation.",
      "icon": React.createElement(FaHouseLock),
      "date": "11/2019 - 04/2021",
      "tags": ["C#", "SQL", "EntityFramework", "NHibernate", "Dapper", "NUnit", ".Net core", "ASP .Net MVC", "GraphQL", "Angular", "Razor"]
  },
  {
      "title": "Software Engineer at DataArt",
      "location": "Dnipro, UA",
      "description": "Worked on a budgeting system for medical research. My main responsibilities included designing and implementing the database, ensuring it could handle complex data efficiently and reliably. Developed the API, enabling smooth communication between the front-end and back-end systems. Additionally, I made infrastructure changes to boost the system's performance and scalability.",
      "icon": React.createElement(SiWorldhealthorganization),
      "date": "04/2018 - 08/2018",
      "tags": ["C#", "SQL", "EntityFramework", "NUnit", ".Net Framework", ".Net core", "ASP .Net MVC"]
  },
  {
      "title": "Software Engineer at LeadsMarket",
      "location": "Dnipro, UA",
      "description": "Was involved into development of new platform for building business pipeline. Main requirements were reasonable response time in highload hours, flexible codeless logic constructor for business users that allows to change and test different behaviour. Designed and implemented relational database and API. Personally was implementing newer version of the module responsible for clients payment calculation based on flexible business rules. As a result calculation speed improved 30% independently of business rule complexity.",
      "icon": React.createElement(AiOutlineDotNet),
      "date": "04/2016 - 11/2019",
      "tags": ["C#", "SQL", "EntityFramework", "NUnit", ".Net Framework", ".Net core", "ASP .Net MVC", "Azure"]
  },
  {
      "title": "Software Engineer at Softserve",
      "location": "Dnipro, UA",
      "description": "Supported old platform. Developed new features according to users requests. Designed and implemented new functionality to overcome huge amounts of data restrictions that appeared after several years of library usage. Implemented proof of concepts.",
      "icon": React.createElement(AiOutlineConsoleSql),
      "date": "11/2013 - 04/2016",
      "tags": ["PowerBuilder", "SQL", "VB.net", "COM object", ".Net Framework"]
  },
  {
      "title": "Graduated Dnipropetrovs’k National University as Specialist",
      "location": "Dnipro, UA",
      "description": "In search of more job opportunitiesSeeking more job opportunities, I decided to move to another city to further my education and explore the job market.",
      "icon": React.createElement(LuGraduationCap),
      "date": "2013 - 2015",
      "tags": ["Education", "Freelance", "Internship"]
  },
  {
      "title": "Graduated Krivyi Rih National University as Bachelor",
      "location": "Krivyi Rih, UA",
      "description": "I graduated Krivyi Rih National University, Department of Information Technology, Software systems",
      "icon": React.createElement(LuGraduationCap),
      "date": "2013",
      "tags": ["Education", "Freelance"]
  }
] as const;