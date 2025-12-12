import { ServiceCard } from "@/sections/ServicesGrid/components/ServiceCard";

export const ServicesGrid = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-zinc-100 bg-no-repeat bg-cover shadow-[rgba(0,0,0,0.25)_0px_12px_11px_-9px_inset] box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
        <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[2%] flex flex-wrap col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] gap-y-2 w-full bg-center px-5 py-[25px] md:gap-x-[4%] md:flex-nowrap md:gap-y-6 md:px-[4%] md:py-[50px]">
          <ServiceCard
            iconSrc="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-4.svg"
            title="Skilled Home Care"
            href="/skilled-home-care"
          />
          <ServiceCard
            iconSrc="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-5.svg"
            title="Non-Skilled Home Care"
            href="/non-skilled-home-care"
          />
          <ServiceCard
            iconSrc="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-6.svg"
            title="About"
            href="/about"
            titleContainerVariant="w-[99.9964%]"
          />
          <ServiceCard
            iconSrc="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-7.svg"
            title="Review"
            href="/review"
            iconContainerVariant="order-1 w-[85px] md:w-[98px]"
            titleContainerVariant="order-1 w-full"
          />
        </div>
      </div>
    </section>
  );
};
