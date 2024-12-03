"use client";
import React, { useEffect, useRef, useState } from "react";

interface TimelineOpions {
  title?: string;
  description?: string;
  data: TimelineEntry[];
}

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

function Header({
  title,
  description,
}: Pick<TimelineOpions, "title" | "description">) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      {title && <h2 className=" mb-4 text-secondary max-w-4xl">{title}</h2>}

      {description && (
        <p className="text-primary text-sm md:text-base">{description}</p>
      )}
    </div>
  );
}

export const Timeline = ({ title, description, data }: TimelineOpions) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div className="w-full">
      <Header title={title} description={description} />

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-secondary flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-background border border-background p-2" />
              </div>
              <p className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary ">
                {item.title}
              </p>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <p className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </p>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] bg-primary to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        ></div>
      </div>
    </div>
  );
};
