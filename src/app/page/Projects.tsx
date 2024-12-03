"use client";
import Page from "@/components/Page";
import Project, { ProjectPops } from "@/components/ui/Project";

const projects: ProjectPops[] = [
  {
    title: "Infinity Gaming World Template",
    description:
      "The Infinity Gaming World Template is a fully responsive, modern website design tailored specifically for online game stores. With its clean layout, intuitive navigation, and eye-catching visuals, this template is perfect for showcasing your collection of video games, from the latest blockbusters to hidden indie gems.",
    techStack: ["HTML", "CSS", "Javascript"],
    repoUrl: "https://github.com/Babyze/Infinity_Gaming_World",
    imageUrl:
      "/assets/images/projects/infinity-gaming-world-template/homepage.png",
  },
  {
    title: "I2C LCD 1602 Vietnamese Charset",
    description: "Vietnamese charset driver for LCD 1602, 1604.",
    techStack: ["Python"],
    repoUrl: "https://github.com/Babyze/i2c-lcd-1602-vietnamese",
    imageUrl: "/assets/images/projects/i2c-lcd-1602-vietnamese/python.jpg",
  },
  {
    title: "Menstrual Health Monitoring",
    description:
      "A menstrual health monitoring application that provides menstrual cycle predictions based on temperature and previous menstrual cycles. It helps users understand more about their menstrual health.",
    role: "Team Leader, Backend Developer",
    techStack: [
      "Typescript",
      "NodeJS",
      "AWS (WAF, Lambda, DynamoDB, Cognito, S3)",
    ],
  },
  {
    title: "Medical Data Sharing System",
    description:
      "I am participating in a project to share medical data among various hospital facilities. My role involves supporting the implementation of database migrations using the AWS Step Functions service.",
    role: "Backend Developer",
    techStack: [
      "Angular",
      "Typescript",
      "NodeJS",
      "AWS (WAF, Lambda, DynamoDB, Cognito, S3, Step Function)",
    ],
  },
  {
    title: "Automated Peritoneal Dialysis",
    description:
      "The application helps patients to install a filtering device at home, review the results, and share them with relatives and doctors at hospitals. Additionally, there is a hospital system where doctors can monitor patients' disease conditions and living habits, thereby aiding in better disease treatment.",
    role: "Backend Developer",
    techStack: [
      "Angular",
      "Typescript",
      "NodeJS",
      "AWS (WAF, Lambda, DynamoDB, Cognito, S3, Iot)",
    ],
  },
];

export default function Projects() {
  return (
    <Page id="projects" className="xl:px-20 my-20">
      <section>
        <h1 className="text-secondary mb-14">My Projects</h1>
        <div className="grid grid-rows-1 md:grid-cols-2 grid-flow-row gap-10 px-5">
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              role={project.role}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </section>
    </Page>
  );
}
