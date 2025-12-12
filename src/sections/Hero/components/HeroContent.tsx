import { HeroButton } from "@/sections/Hero/components/HeroButton";
import { HeroContactButton } from "@/sections/Hero/components/HeroContactButton";

export const HeroContent = () => {
  return (
    <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center max-w-[1200px] min-h-[auto] gap-y-6 w-full bg-center px-5 py-[50px] md:flex-row md:min-h-[650px] md:px-[4%] md:py-[150px]">
      <div className="relative items-start self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-2.5 min-w-[4%] gap-y-4 w-full bg-center p-4 md:min-h-2">
        <div className="relative box-border caret-transparent max-w-none min-h-2.5 min-w-2.5 w-full md:max-w-full">
          <div className="box-border caret-transparent h-full w-full">
            <h1 className="text-[40px] font-bold box-border caret-transparent text-left uppercase font-inter md:text-5xl">
              <span className="text-white text-[40px] box-border caret-transparent md:text-5xl">
                Enhance Your Health at Home
              </span>
            </h1>
          </div>
        </div>
        <div className="relative box-border caret-transparent max-w-none min-h-2.5 min-w-2.5 order-1 w-full md:max-w-full">
          <div className="box-border caret-transparent h-full w-full">
            <h2 className="text-2xl box-border caret-transparent text-left font-inter">
              <span className="text-white box-border caret-transparent">
                We offer home care services throughout Aventura, Sunny Isles,
                North Miami Beach, Miami Beach and SW Miami .
              </span>
            </h2>
          </div>
        </div>
        <HeroButton />
        <div className="relative box-border caret-transparent max-w-full min-h-px min-w-2.5 order-3 w-[28.2%]">
          <div className="box-border caret-transparent h-full align-top w-full py-1">
            <hr className="text-white box-border caret-transparent min-h-0.5 bg-[position:0px_50%] border-t-2 border-b-0 border-x-0 border-white" />
          </div>
        </div>
        <HeroContactButton />
      </div>
    </div>
  );
};
