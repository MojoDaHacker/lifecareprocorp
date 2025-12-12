export const MobileMenuContact = () => {
  return (
    <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] min-h-[auto] gap-y-6 w-full bg-center px-[4%] py-0 md:flex-row md:min-h-[460px] md:px-0 md:py-[4%]">
      <div className="relative items-start self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-start max-w-full min-h-[500px] min-w-[4%] gap-y-6 w-full bg-center pt-4 pb-[100px] px-4 md:justify-center md:min-h-2 md:pb-4">
        <div className="relative box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,1fr)] max-w-full min-h-2.5 min-w-2.5 w-[280px]">
          <a className="relative items-center bg-pink-600 box-border caret-transparent clear-both flex h-full justify-center leading-[22px] text-center text-nowrap align-top w-full border py-4 rounded-[1px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[22px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:align-middle after:visible after:w-0 after:-mr-1 after:border-separate after:font-poppins hover:bg-blue-950 hover:border-blue-950">
            <span className="absolute box-border caret-transparent hidden mt-[-13px] text-nowrap w-[50px] left-0 top-2/4">
              <span className="text-white box-border caret-transparent fill-blue-700 leading-[normal] text-nowrap font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:fill-blue-700 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome"></span>
            </span>
            <span className="text-white text-lg font-bold box-border caret-transparent block grow leading-[normal] max-w-max align-middle md:text-base">
              (786) 985-8987
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
