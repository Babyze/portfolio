"use client";
import Page from "@/components/Page";
import { FaAws, FaReact } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skills: SkillProp[] = [
  {
    title: "Front end",
    items: [
      {
        name: "Next.JS",
        icon: <TbBrandNextjs />,
      },
      {
        name: "React",
        icon: <FaReact />,
      },
    ],
  },
  {
    title: "Back end",
    items: [
      {
        name: "Nest.JS",
        icon: <SiNestjs />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        name: "AWS",
        icon: <FaAws />,
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "Postgresql",
        icon: <SiPostgresql />,
      },
    ],
  },
];

interface SkillProp {
  title: string;
  items: {
    name: string;
    icon: JSX.Element;
  }[];
}

function Skill({ title, items }: SkillProp) {
  return (
    <div>
      <h2 className="text-2xl mb-5">{title}</h2>
      <div className="flex flex-row gap-10">
        {items.map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col border-1 rounded-lg  border-secondary h-36 w-36 justify-center items-center p-5"
            >
              <div className="text-secondary text-7xl">{item.icon}</div>
              <span className="mt-2 text-xl">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Page id="skills" className="xl:px-20 mt-10">
      <section>
        <h1 className="text-secondary mb-14">My Skills</h1>
        <div className="grid grid-flow-row-dense grid-rows-2 md:grid-cols-2 gap-10 justify-center md:justify-between xl:px-32">
          {skills.map((skill) => {
            return (
              <Skill
                key={skill.title}
                title={skill.title}
                items={skill.items}
              />
            );
          })}
        </div>
      </section>
    </Page>
  );
}
