import { ServiceDetailCard } from "@/sections/ServicesCards/components/ServiceDetailCard";

export const ServicesCards = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-slate-50 bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
        <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] min-h-0 gap-y-6 w-full bg-center p-[4%] md:flex-row md:min-h-60">
          <ServiceDetailCard
            variant="items-start"
            iconUrl="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-11.svg"
            title="Registered Nurses and Licensed Practical Nurses"
            description="Administer IV Infusion, Medication Management, Peg Tube, Urinary Catheter, Wound Care, Lung Drainage (Pleurex drainage system) Management, Diabetes Management"
          />
          <ServiceDetailCard
            variant="items-center md:items-start"
            iconUrl="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-12.svg"
            title="Care Manager"
            description="Coordinate Care with Doctors and Other Medical Disciplines, then Report to Primary Care Givers Who live out of area."
          />
          <ServiceDetailCard
            variant="items-center md:items-start"
            iconUrl="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-13.svg"
            title="Home Health Aides & Certified Nursing Assistants"
            description="Competent, Compassionate Aides to bathe transfer, Feed support and Interact with Clients to prevent Social isolation."
          />
        </div>
      </div>
    </section>
  );
};
