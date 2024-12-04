import Page from "@/components/Page";
import Social from "@/components/Social";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { FlipWords } from "@/components/ui/FlipWords";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import profilePic from "../../../public/assets/dang_huynh_anh.jpg";

function Information() {
  const skills = ["Front end", "Back end"];

  return (
    <>
      <span className="text-xl">
        <FlipWords words={skills} className="text-secondary"></FlipWords>{" "}
        Developer
      </span>
      <h1 className="mt-3">
        Hi, I&apos;m <span className="text-secondary block">Huynh Anh</span>
      </h1>
      <div className="mt-5 text-xl">
        I&apos;m a passionate programmer, who is always looking for new
        challenges to improve myself, also a team player, who is always ready to
        learn new things and help others.
      </div>
    </>
  );
}

function ExternalResource() {
  return (
    <div className="mt-7 flex flex-col xl:flex-row justify-center xl:justify-normal items-center gap-8">
      <Button
        as={Link}
        color="secondary"
        size="lg"
        radius="full"
        endContent={<FaDownload />}
        href="/assets/cv/HA-CV.pdf"
        className="bg-transparent border-2 border-secondary hover:bg-secondary hover:text-primary"
      >
        Download CV
      </Button>

      <div className="">
        <Social
          containerStyles="flex gap-3"
          iconStyles="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-primary hover:transtion-all duration-500"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Page id="home" className="min-h-screen pt-40 md:pt-60 xl:px-40">
      <section className="flex flex-col xl:flex-row items-center justify-between">
        <div className="text-center xl:text-left order-2 xl:order-none basis-1/2">
          <Information />
          <ExternalResource />
        </div>

        <div className="pr-15 order-1 xl:order-none mb-8 xl:mb-0">
          <BackgroundGradient className="h-72 w-72 md:h-96 md:w-96">
            <Image
              src={profilePic}
              alt="Dang Huynh Anh"
              loading="lazy"
              className="rounded-full w-72 h-72 md:w-96 md:h-96"
            />
          </BackgroundGradient>
        </div>
      </section>
    </Page>
  );
}
