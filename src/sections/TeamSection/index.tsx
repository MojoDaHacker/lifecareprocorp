import { TeamContent } from "@/sections/TeamSection/components/TeamContent";

export const TeamSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
        <TeamContent />
      </div>
    </section>
  );
};
