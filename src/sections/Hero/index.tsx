import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-[url('https://lirp.cdn-website.com/918d4e4f/dms3rep/multi/opt/shutterstock_2472675017-1920w.jpg')] bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center before:accent-auto before:bg-neutral-800 before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:opacity-40 before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-poppins">
        <HeroContent />
      </div>
    </section>
  );
};
