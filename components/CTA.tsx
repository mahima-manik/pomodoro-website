/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="/cta_cover.png"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-10"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12 text-white">
            Don&apos;t waste your time thinking. Take the first step today.
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
