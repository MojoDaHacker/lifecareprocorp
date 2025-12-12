import { MobileMenuHeader } from "@/sections/MobileMenu/components/MobileMenuHeader";
import { MobileMenuNav } from "@/sections/MobileMenu/components/MobileMenuNav";
import { MobileMenuContact } from "@/sections/MobileMenu/components/MobileMenuContact";

export const MobileMenu = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent flex flex-col h-full translate-x-[100.0%] w-[300px] z-[13] overflow-auto right-0 top-0 md:w-96">
      <div className="relative box-border caret-transparent grow shrink-0">
        <div className="box-border caret-transparent hidden"></div>
        <section className="box-border caret-transparent">
          <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
            <MobileMenuHeader />
          </div>
        </section>
      </div>
      <div className="relative box-border caret-transparent grow shrink-0">
        <div className="box-border caret-transparent hidden"></div>
        <section className="box-border caret-transparent">
          <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
            <MobileMenuNav />
          </div>
        </section>
      </div>
      <div className="relative box-border caret-transparent grow shrink-0">
        <div className="box-border caret-transparent hidden"></div>
        <section className="box-border caret-transparent">
          <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
            <MobileMenuContact />
          </div>
        </section>
      </div>
    </div>
  );
};
