import { CTAContent } from "@/sections/CallToAction/components/CTAContent";

export const CallToAction = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-blue-950 bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
        <CTAContent
          variant="gap-x-[2%] min-h-0 gap-y-2.5 py-[30px] md:min-h-[auto] md:gap-y-3"
          heading="Receive Personalized Home Care Services"
          headingLevel="h3"
          headingClassName="text-3xl font-bold box-border caret-transparent text-left uppercase font-inter md:text-4xl md:text-start"
          headingSpanClassName="text-white text-3xl box-border caret-transparent text-left md:text-4xl md:text-start"
          buttonText="Reach Out Today"
          buttonHref="/contact"
        />
      </div>
    </section>
  );
};
