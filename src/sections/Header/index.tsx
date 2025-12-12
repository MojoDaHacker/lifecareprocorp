import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <div
      role="banner"
      className="sticky box-border caret-transparent z-[13] top-0"
    >
      <div className="relative box-border caret-transparent">
        <div className="box-border caret-transparent hidden"></div>
        <Navbar />
      </div>
    </div>
  );
};
