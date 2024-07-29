/* eslint-disable @next/next/no-img-element */
import React from "react";
import logo from "@/app/logo.png";
import progressImage from "@/app/progress.png";
import Image from "next/image";

const features = [
  {
    title: "Create categories for your tasks",
    description:
      "What do you want to focus on?",
    styles: "bg-primary text-primary-content",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch">
        <div className="w-full translate-x-12 bg-base-200 rounded-t-box h-full p-6">
          <p className="font-medium uppercase tracking-wide text-base-content/60 text-sm mb-3">
            Create categories
          </p>
          <div className="relative textarea py-4 h-full mr-12 bg-base-200 group-hover:bg-base-100 group-hover:border-base-content/10 text-base-content">
            <div className="absolute left-4 top-4 group-hover:hidden flex items-center ">
              <span>Readi</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              Reading books.
            </div>
            <div className="w-full h-[1px] bg-base-content/20 my-2"></div>
            <div className="opacity-0 group-hover:opacity-100 duration-1000 flex items-center gap-0.5">
              <span>Office work.</span>
              <span className="w-[2px] h-6 bg-primary animate-pulse"></span>
            </div>
            <button className="btn shadow-lg btn-primary absolute right-4 bottom-6 opacity-0 group-hover:opacity-100 duration-1000">
              Save
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Managed pomodoros and breaks",
    description: "Get simple reminder to start break or pomodoro",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 space-y-4">
        <div className="relative bg-neutral-content text-neutral rounded-box p-4 flex items-center gap-4">
          <Image src={logo} alt="Logo" className="w-8 h-8" />
          <div>
            <p className="font-semibold">Pomodoro Timer</p>
            <p>Time is up! Starting break.</p>
          </div>
        </div>
        <div className="relative bg-neutral-content text-neutral rounded-box p-4 flex items-center gap-4">
          <Image src={logo} alt="Logo" className="w-8 h-8" />
          <div>
            <p className="font-semibold">Pomodoro Timer</p>
            <p>Break is over! Start next pomodoro?</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Progress board to track sessions and hours",
    description: "See your progress and see how you are doing",
    styles: "bg-neutral text-neutral-content md:col-span-1 text-base-content",
    demo: (
      <div className="relative w-full h-full overflow-hidden group">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4">
          <Image src={progressImage} alt="Progress Image" layout="fill" objectFit="cover" />
        </div>
      </div>
    ),
  },
];
const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em]">
          Hyperfocus with{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-content">
            Pomodoro
          </span>{" "}
          and{" "}
          <span className="underline decoration-dashed underline-offset-8 decoration-base-content">
            breaks
          </span>
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
