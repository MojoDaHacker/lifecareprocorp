export const HeroContactButton = () => {
  return (
    <div className="relative box-border caret-transparent h-[55px] max-w-full min-h-2.5 min-w-2.5 order-2 w-[200px] md:order-4">
      <a
        href="#contact"
        className="relative text-blue-700 bg-pink-600 box-border caret-transparent clear-both block h-full leading-[22px] text-center text-nowrap align-top w-full border rounded-[1px] border-solid border-transparent after:accent-auto after:box-border after:caret-transparent after:text-blue-700 after:inline-block after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[22px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:text-nowrap after:align-middle after:visible after:w-0 after:-mr-1 after:border-separate after:font-poppins hover:bg-blue-950 hover:border-blue-950"
      >
        <span className="absolute box-border caret-transparent hidden mt-[-13px] text-nowrap w-[50px] left-0 top-2/4">
          <span className="text-white box-border caret-transparent fill-blue-700 leading-[normal] text-nowrap font-fontawesome before:accent-auto before:box-border before:caret-transparent before:text-white before:inline-block before:fill-blue-700 before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-fontawesome"></span>
        </span>
        <span className="text-white text-lg font-bold box-border caret-transparent inline-block leading-[normal] max-w-[98%] align-middle py-4 md:text-base">
          Talk With Us Now
        </span>
      </a>
    </div>
  );
};
