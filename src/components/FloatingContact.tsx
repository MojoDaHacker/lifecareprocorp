import { FloatingContactContent } from "@/components/FloatingContactContent";

export const FloatingContact = () => {
  return (
    <div className="fixed text-xs shadow-[rgba(0,0,0,0.25)_0px_0px_20px_0px] caret-transparent w-[380px] z-[2147483640] ml-2.5 mr-20 mt-2.5 rounded-t-md right-0 bottom-0 font-open_sans">
      <FloatingContactContent />
    </div>
  );
};
