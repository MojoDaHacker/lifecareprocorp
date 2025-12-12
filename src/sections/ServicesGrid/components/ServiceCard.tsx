export type ServiceCardProps = {
  iconSrc: string;
  title: string;
  href: string;
  iconContainerVariant?: string;
  titleContainerVariant?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col grow justify-between max-w-full min-h-40 min-w-[4%] gap-y-4 w-[49%] bg-center p-4 md:grow-0 md:min-h-2 md:gap-y-6 md:w-[22%]">
      <div
        className={`relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 w-[85px] md:w-[98px] ${props.iconContainerVariant || ""}`}
      >
        <div className="text-[0px] box-border caret-transparent h-full text-center w-full border-blue-950 p-5 rounded-[50%] border-[3px] border-solid">
          <img
            src={props.iconSrc}
            alt="Icon"
            className="text-pink-600 box-border caret-transparent h-full w-full"
          />
        </div>
      </div>
      <div
        className={`relative box-border caret-transparent max-w-full min-h-2.5 min-w-2.5 order-1 ${props.titleContainerVariant || "w-full"}`}
      >
        <div className="box-border caret-transparent h-full w-full">
          <h4 className="text-[22px] font-bold box-border caret-transparent text-center font-inter md:text-2xl">
            <span className="text-[22px] box-border caret-transparent md:text-2xl">
              {props.title}
            </span>
          </h4>
        </div>
      </div>
      <div className="relative box-border caret-transparent h-[55px] max-w-full min-h-2.5 min-w-2.5 order-2 w-[200px]">
        <a
          href={props.href}
          className="relative text-blue-700 bg-pink-600 box-border caret-transparent clear-both block h-full leading-[22px] text-center text-nowrap align-top w-full border rounded-[1px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:inline-block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[22px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:align-middle after:visible after:w-0 after:-mr-1 after:border-separate after:font-poppins hover:bg-blue-950 hover:border-blue-950"
        >
          <span className="absolute box-border caret-transparent hidden mt-[-13px] text-nowrap w-[50px] left-0 top-2/4">
            <span className="text-white box-border caret-transparent fill-blue-700 leading-[normal] text-nowrap font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:fill-blue-700 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome"></span>
          </span>
          <span className="text-white text-lg font-bold box-border caret-transparent inline-block leading-[normal] max-w-[98%] align-middle py-4 md:text-base">
            Learn More
          </span>
        </a>
      </div>
    </div>
  );
};
