export const FooterContent = () => {
  return (
    <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[3%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] gap-y-4 w-full bg-center pt-[30px] pb-[65px] px-5 md:flex-row md:gap-y-[18px] md:px-[4%]">
      <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-9 min-w-[4%] order-2 gap-y-6 w-full bg-center md:items-start md:min-h-2 md:w-[31.3333%]">
        <div className="relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 order-none w-full md:order-1">
          <div className="box-border caret-transparent h-full w-full">
            <p className="text-white text-xs box-border caret-transparent text-center my-3">
              Copyright ©{" "}
              <span className="box-border caret-transparent">2025</span>
              Life Care Pro | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-10 min-w-[4%] order-1 gap-y-6 w-full bg-center md:items-start md:min-h-2 md:w-[31.3333%]">
        <div className="relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-full">
          <div className="text-white text-xs box-border caret-transparent h-full text-center w-full">
            <p className="box-border caret-transparent leading-[18px] font-montserrat">
              Aventura, FL 33180
            </p>
          </div>
        </div>
      </div>
      <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-[45px] min-w-[4%] gap-y-6 w-full bg-center md:items-end md:min-h-2 md:w-[31.3333%]">
        <div className="relative self-center box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-[178px]">
          <div className="relative box-border caret-transparent h-full w-full">
            <a
              href="/"
              className="text-blue-700 italic box-border caret-transparent text-center underline align-top"
            >
              <img
                src="https://c.animaapp.com/mj1u72tb36D26f/assets/logowhite-213w.png"
                alt="A white background with a few lines on it"
                className="aspect-[auto_210_/_94] box-border caret-transparent inline-block h-full max-w-full object-cover align-top w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
