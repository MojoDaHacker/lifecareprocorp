export const MobileMenuHeader = () => {
  return (
    <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] min-h-[auto] gap-y-6 w-full bg-center px-[4%] py-[2%] md:flex-row md:min-h-[100px] md:px-0">
      <div className="relative items-end self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-20 min-w-[4%] gap-y-6 w-full bg-center p-4 md:min-h-2">
        <div className="relative box-border caret-transparent block h-[30px] min-h-2.5 min-w-2.5 w-[30px] md:hidden">
          <a
            role="button"
            className="box-border caret-transparent block h-full align-top w-full"
          >
            <img
              src="https://c.animaapp.com/mj1u72tb36D26f/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
