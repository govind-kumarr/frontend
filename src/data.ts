interface PersonalInfo {
  full_name: string;
  role: string;
}

export interface ProjectInfo {
  title: string;
  description: string;
  github_link: string;
  deployed_link: string;
  image_path: string;
}

export interface ExperienceInfo {
  position: string;
  organization: string;
  startTime: Date;
  endTime?: Date;
  description: string;
}

export const data: PersonalInfo = {
  full_name: "Govind Kumar",
  role: "Full Stack Developer",
};

export const projects: ProjectInfo[] = [
  {
    title: "AI Chatbot",
    description:
      "The project consists of three repositories: Chatbot, Chatbot_RJS, and Node_Server. The Chatbot repository holds the embeddable chatbot code for website integration, with completed development but pending API integration and code modularization.",
    github_link: "https://github.com/govind-kumarr/simple_rag_dashboard",
    deployed_link: "https://github.com/govind-kumarr/simple_rag_dashboard",
    image_path: "",
  },
  {
    title: "Demo Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt quis cupiditate ducimus non esse?",
    github_link: "#",
    deployed_link: "#",
    image_path: "",
  },
  {
    title: "Demo Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt quis cupiditate ducimus non esse?",
    github_link: "#",
    deployed_link: "#",
    image_path: "",
  },
  {
    title: "Demo Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt quis cupiditate ducimus non esse?",
    github_link: "#",
    deployed_link: "#",
    image_path: "",
  },
];

export const experiences: ExperienceInfo[] = [
  {
    position: "Full stack engineer",
    organization: "IT Smiths",
    startTime: new Date("2023-04-10"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus, quas nobis. Deserunt id error quam dicta velit vitae eos officia, modiculpa sed deleniti aperiam eveniet, possimus ipsum delectus nam rem?Tempore, quibusdam quis.",
  },
];

export const about_me = {
  description:
    "I am a full-stack developer with expertise in the MERN stack, creating dynamic and responsive web applications. In addition to web development, I utilize Python to build generative AI applications and chatbots, enhancing user experiences with intelligent automation. My knowledge of AWS services, including S3, Route 53, and EC2, ensures reliable and scalable application deployment. I also manage Nginx servers for proxies and load balancing, and streamline CI/CD processes with GitHub Actions. My diverse skill set allows me to deliver robust and innovative solutions, staying at the forefront of technology to tackle modern development challenges.",
};

export const social_links = [
  {
    name: "",
    link: "",
    // icon: <i className="fab fa-facebook-f" />,
  },
];
