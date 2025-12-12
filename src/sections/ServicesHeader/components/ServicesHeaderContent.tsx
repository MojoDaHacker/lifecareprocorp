export const ServicesHeaderContent = () => {
  return (
    <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] min-h-0 gap-y-6 w-full bg-center px-[4%] py-[1%] md:flex-row md:min-h-[auto]">
      <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-20 min-w-[4%] gap-y-6 w-full bg-center p-4 md:items-start md:min-h-2">
        <div className="relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-full">
          <div className="box-border caret-transparent h-full w-full">
            <h3 className="text-3xl font-bold box-border caret-transparent uppercase font-inter md:text-4xl">
              <span className="text-3xl box-border caret-transparent md:text-4xl">
                Services
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
