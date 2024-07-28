/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <a href="https://www.producthunt.com/posts/flutter-starter-kit?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-flutter&#0045;starter&#0045;kit" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=471570&theme=neutral" alt="Flutter&#0032;Starter&#0032;Kit - Ship&#0032;your&#0032;mobile&#0032;app&#0032;with&#0032;Flutter&#0032;and&#0032;Firebase&#0032;in&#0032;minutes&#0033; | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /></a>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Hack your time, <br />one pomodoro at a time
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          A minimalistic pomodoro timer that helps you focus on one task at a
          time and then take a break.
        </p>
        <div className="flex gap-4">
          <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              style={{ width: "200px", height: "60px" }}
              width="200"
              height="60"
            />
          </a>
          <a href="https://apps.apple.com/us/app/your-app-id" target="_blank">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              style={{ width: "200px", height: "60px" }}
              width="200"
              height="60"
            />
          </a>
        </div>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-1/2">
        <Image
          src="/hero.png"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
