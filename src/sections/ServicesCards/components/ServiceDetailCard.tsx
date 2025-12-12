export type ServiceDetailCardProps = {
  variant: string;
  iconUrl: string;
  title: string;
  description: string;
};

export const ServiceDetailCard = (props: ServiceDetailCardProps) => {
  return (
    <div
      className={`relative self-stretch bg-white bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-start max-w-full min-h-20 min-w-[4%] gap-y-6 w-full bg-center p-[25px] md:min-h-2 md:w-[30.6667%] ${props.variant}`}
    >
      <div
        className={`relative items-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex justify-start max-h-full max-w-full gap-y-6 w-full bg-center ${props.variant === "items-start" ? "min-h-[58px] md:min-h-[100px]" : props.variant === "items-center md:items-start" && props.title === "Care Manager" ? "min-h-12 md:min-h-[60px]" : "self-start min-h-12 md:self-auto md:min-h-[93px]"}`}
      >
        <div className="relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-[60px]">
          <div className="text-[0px] box-border caret-transparent h-full text-center w-full">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="text-black box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
        <div className="relative self-center box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-full md:self-auto">
          <div className="box-border caret-transparent h-full w-full">
            <h6 className="text-white text-base box-border caret-transparent font-inter md:text-xl">
              <strong className="text-neutral-800 text-base font-bold box-border caret-transparent md:text-xl">
                {props.title}
              </strong>
            </h6>
          </div>
        </div>
      </div>
      <div
        className={`relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-full ${props.variant === "items-center md:items-start" ? "self-start md:self-auto" : ""}`}
      >
        <div className="box-border caret-transparent h-full w-full">
          <p className="box-border caret-transparent leading-6 text-left font-montserrat">
            <span className="box-border caret-transparent">
              {props.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
