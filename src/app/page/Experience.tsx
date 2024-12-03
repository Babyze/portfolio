"use client";
import Page from "@/components/Page";
import { Timeline } from "@/components/ui/Timeline";
import { Image as NextUIImage } from "@nextui-org/react";

export default function Experience() {
  return (
    <Page id="experience" className="xl:px-20">
      <Timeline
        title="Experience"
        description="These are the knowledge, experiences, and achievements I have gained while journeying through the software universe..."
        data={data}
      />
    </Page>
  );
}

const data = [
  {
    title: "2024",
    content: (
      <div>
        <div className="static">
          <NextUIImage
            src="/assets/images/company/fpt-software.png"
            alt="FPT Software"
            className="object-contain h-32 md:w-full"
          />
        </div>

        <div>
          <p className="text-2xl text-secondary">FPT Software</p>
          <p className="italic my-2">Backend Developer / Dec 2021 - Aug 2024</p>
          <ul className="list-disc text-lg space-y-2">
            <li>
              Conducted code reviews, contributing to maintaining high standards
              of code quality and team collaboration
            </li>
            <li>
              Provided mentorship to intern college students, enhancing their
              practical software engineering skills
            </li>
            <li>
              Lead the backend development team, focusing on creating, improving
              to make them fast and reliable. My job includes planning our
              technical approaches, guiding the team, and actively coding and
              reviewing code
            </li>
            <li>
              My Award:
              <div className="my-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <NextUIImage
                    src="/assets/images/awards/FPT-Best-Rookie.jpg"
                    alt="FPT Best Rookie Award"
                    isZoomed
                    className="rounded-lg object-cover h-60 lg:h-96 w-full"
                  />

                  <NextUIImage
                    src="/assets/images/awards/FPT-Excellent-BackendDeveloper.jpg"
                    alt="Excellent Backend Developer Award"
                    isZoomed
                    className="rounded-lg object-cover h-60 lg:h-96 w-full"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <div className="static">
          <NextUIImage
            src="/assets/images/company/fpt-software.png"
            alt="FPT Software"
            className="object-contain h-32 md:w-full"
          />
        </div>
        <div>
          <p className="text-2xl text-secondary">FPT Software (Intern)</p>
          <p className="italic my-2">Backend Developer / Oct 2020 - Dec 2020</p>
          <ul className="list-disc text-lg space-y-2">
            <li>
              After accumulating enough experience, I ventured into the
              mysterious and captivating software universe. The first planet I
              landed on was the planet FPT Software
            </li>
            <li>
              On this planet, although I was still a probationary employee, I
              completed the tasks assigned to me very well. I also assisted
              other team members to help accelerate the progress of the work
            </li>
            <li>
              Thanks to this, I gained new and valuable technologies and
              knowledge, which serve as excellent assets for my future career
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
