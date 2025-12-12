export const MobileMenuButton = () => {
  return (
    <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex justify-end max-w-full min-h-2 min-w-[4%] order-3 gap-y-6 w-3/12 bg-center px-4 py-1.5 md:hidden md:order-none md:w-[10%] md:py-4">
      <div className="relative box-border caret-transparent block h-[22px] min-h-2.5 min-w-2.5 w-5 md:hidden md:h-[30px] md:w-[30px]">
        <a
          role="button"
          className="box-border caret-transparent block h-full align-top w-full"
        >
          <img
            src="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </a>
      </div>
    </div>
  );
};
