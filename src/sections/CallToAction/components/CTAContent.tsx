export type CTAContentProps = {
  variant: string;
  heading: string;
  headingLevel: "h3" | "h5";
  headingClassName: string;
  headingSpanClassName: string;
  subtitle?: string;
  subtitleClassName?: string;
  subtitleSpanClassName?: string;
  buttonText: string;
  buttonHref: string;
};

export const CTAContent = (props: CTAContentProps) => {
  const HeadingTag = props.headingLevel;

  return (
    <div
      className={`relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] w-full bg-center px-5 md:flex-row md:px-[4%] ${props.variant}`}
    >
      <div
        className={`relative self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-w-[4%] w-full bg-center md:min-h-2 ${props.variant === "gap-x-[2%] min-h-0 gap-y-2.5 py-[30px] md:min-h-[auto] md:gap-y-3" ? "items-center min-h-[25px] gap-y-6 px-4 py-0 md:items-start md:w-[78%] md:py-4" : "items-start min-h-2.5 gap-y-4 p-4 md:items-center"}`}
      >
        <div
          className={`relative box-border caret-transparent min-h-2.5 min-w-2.5 w-full ${props.variant === "gap-x-[2%] min-h-0 gap-y-2.5 py-[30px] md:min-h-[auto] md:gap-y-3" ? "self-start max-w-full md:self-auto" : "max-w-none md:max-w-full"}`}
        >
          <div className="box-border caret-transparent h-full w-full">
            <HeadingTag className={props.headingClassName}>
              <span className={props.headingSpanClassName}>
                {props.heading}
              </span>
            </HeadingTag>
          </div>
        </div>
        {props.subtitle && (
          <div className="relative box-border caret-transparent max-w-none min-h-2.5 min-w-2.5 order-1 w-full md:max-w-full">
            <div className="box-border caret-transparent h-full w-full">
              <h6 className={props.subtitleClassName}>
                <span className={props.subtitleSpanClassName}>
                  {props.subtitle}
                </span>
              </h6>
            </div>
          </div>
        )}
        <div
          className={
            props.subtitle
              ? "relative box-border caret-transparent h-[55px] max-w-full min-h-2.5 min-w-2.5 order-2 w-[200px]"
              : "relative items-start self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-[75px] min-w-[4%] gap-y-5 w-full bg-center px-[5px] py-2.5 md:items-center md:min-h-2 md:gap-y-[30px] md:w-1/5 md:p-4"
          }
        >
          {props.subtitle ? (
            <a
              href={props.buttonHref}
              className="relative text-blue-700 bg-pink-600 box-border caret-transparent clear-both block h-full leading-[22px] text-center text-nowrap align-top w-full border rounded-[1px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:inline-block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[22px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:align-middle after:visible after:w-0 after:-mr-1 after:border-separate after:font-poppins hover:bg-blue-950 hover:border-blue-950"
            >
              <span className="absolute box-border caret-transparent hidden mt-[-13px] text-nowrap w-[50px] left-0 top-2/4">
                <span className="text-white box-border caret-transparent fill-blue-700 leading-[normal] text-nowrap font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:fill-blue-700 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome"></span>
              </span>
              <span className="text-white text-lg font-bold box-border caret-transparent inline-block leading-[normal] max-w-[98%] align-middle py-4 md:text-base">
                {props.buttonText}
              </span>
            </a>
          ) : (
            <div className="relative box-border caret-transparent h-[55px] max-w-full min-h-2.5 min-w-2.5 w-[200px]">
              <a
                href={props.buttonHref}
                className="relative text-blue-700 bg-pink-600 box-border caret-transparent clear-both block h-full leading-[22px] text-center text-nowrap align-top w-full border rounded-[1px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:inline-block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[22px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:align-middle after:visible after:w-0 after:-mr-1 after:border-separate after:font-poppins hover:bg-blue-950 hover:border-blue-950"
              >
                <span className="absolute box-border caret-transparent hidden mt-[-13px] text-nowrap w-[50px] left-0 top-2/4">
                  <span className="text-white box-border caret-transparent fill-blue-700 leading-[normal] text-nowrap font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:fill-blue-700 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome"></span>
                </span>
                <span className="text-white text-lg font-bold box-border caret-transparent inline-block leading-[normal] max-w-[98%] align-middle py-4 md:text-base">
                  {props.buttonText}
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
