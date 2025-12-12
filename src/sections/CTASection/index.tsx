import { CTAContent } from "@/sections/CallToAction/components/CTAContent";

export const CTASection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-fixed bg-[url('https://lirp.cdn-website.com/918d4e4f/dms3rep/multi/opt/shutterstock_2474183475+%281%29-1920w.jpg')] bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:opacity-[0.57] before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-poppins">
        <CTAContent
          variant="gap-x-[4%]"
          heading="Compassionate Care You Can Count On"
          headingLevel="h5"
          headingClassName="text-white text-3xl box-border caret-transparent text-left uppercase font-inter md:text-5xl md:text-center"
          headingSpanClassName="text-3xl box-border caret-transparent text-left md:text-5xl md:text-center"
          subtitle="Providing peace of mind with every visit"
          subtitleClassName="text-white text-2xl box-border caret-transparent text-left font-inter md:text-center"
          subtitleSpanClassName="box-border caret-transparent text-left md:text-center"
          buttonText="Get Started"
          buttonhref="#contact"
        />
      </div>
    </section>
  );
};
