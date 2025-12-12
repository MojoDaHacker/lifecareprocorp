import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { NavbarContact } from "@/sections/Header/components/NavbarContact";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
        <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[0%] flex col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center min-h-[55px] gap-y-0 w-full bg-center px-[4%] md:min-h-[auto]">
          <NavbarLogo />
          <DesktopMenu />
          <NavbarContact />
          <MobileMenuButton />
        </div>
      </div>
    </section>
  );
};
