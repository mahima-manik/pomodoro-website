import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <a
          href="https://www.producthunt.com/products/flutter-starter-kit?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-flutter&#0045;starter&#0045;kit"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=593691&theme=light"
            alt="Flutter&#0032;Starter&#0032;Kit - Ship&#0032;your&#0032;mobile&#0032;app&#0032;with&#0032;Flutter&#0032;and&#0032;Firebase&#0032;in&#0032;minutes&#0033; | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            width="250"
            height="54"
          />
        </a>

        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Minimalistic Pomodoro Timer
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          A minimalistic pomodoro timer that helps you focus on one task at a
          time and then take a break.
        </p>
        <button className="btn btn-primary btn-wide">
          Get {config.appName}
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
