import { Header } from "@/sections/Header";
import { MobileMenu } from "@/sections/MobileMenu";
import { Hero } from "@/sections/Hero";
import { CallToAction } from "@/sections/CallToAction";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesGrid } from "@/sections/ServicesGrid";
import { CTASection } from "@/sections/CTASection";
import { ServicesDetail } from "@/sections/ServicesDetail";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { ContactInfo } from "@/sections/ContactInfo";
import { TeamSection } from "@/sections/TeamSection";
import { ServicesHeader } from "@/sections/ServicesHeader";
import { ServicesCards } from "@/sections/ServicesCards";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { WhoWeAre } from "./sections/WhoWeAre";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-source_sans_pro">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent w-full">
              <div className="box-border caret-transparent">
                <div className="relative text-neutral-800 bg-white box-border caret-transparent font-poppins">
                  <div className="box-border caret-transparent">
                    <div className="relative box-border caret-transparent">
                      <div className="box-border caret-transparent">
                        <Header />
                        <MobileMenu />
                      </div>
                      <div className="box-border caret-transparent">
                        <div className="box-border caret-transparent">
                          <div
                            role="main"
                            className="box-border caret-transparent"
                          >
                            <div className="box-border caret-transparent">
                              <div id="home" className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <Hero />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <CallToAction />
                              </div>
                              <div  id="about" className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <AboutSection />
                              </div>
                              <div id="whoweare" className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <WhoWeAre />
                              </div>
                              {/* <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <ServicesGrid />
                              </div> */}
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <CTASection />
                              </div>
                              <div id="services" className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <ServicesDetail />
                              </div>

                              
                              <div id="whychoose" className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <WhyChooseSection />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <ContactInfo />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <TeamSection />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <ServicesHeader />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <ServicesCards />
                              </div>
                              <div className="relative box-border caret-transparent">
                                <div className="box-border caret-transparent hidden"></div>
                                <FinalCTA />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative box-border caret-transparent">
                        <div
                          role="contentinfo"
                          className="bg-blue-950 box-border caret-transparent text-left"
                        >
                          <div className="relative box-border caret-transparent">
                            <div className="box-border caret-transparent hidden"></div>
                            <Footer />
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent">
                        <div className="fixed box-border caret-transparent pointer-events-none z-20 inset-0">
                          <div className="relative box-border caret-transparent">
                            <div className="box-border caret-transparent hidden"></div>
                            <section className="box-border caret-transparent">
                              <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(0px,max-content)] justify-start bg-center">
                                <div className="relative items-center self-start bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col col-end-[span_1] col-start-1 row-end-[span_1] row-start-1 justify-start justify-self-center min-h-0 gap-y-6 w-full bg-center px-[4%] md:flex-row md:min-h-60 md:px-0">
                                  <div className="relative items-center self-stretch bg-no-repeat bg-cover box-border caret-transparent gap-x-[4%] flex flex-col justify-center max-w-full min-h-20 min-w-[4%] gap-y-6 w-full bg-center md:items-start md:min-h-2">
                                    <div className="relative items-start bg-no-repeat bg-cover box-border caret-transparent gap-x-0 grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] h-[1000px] justify-start max-w-full gap-y-0 w-screen bg-center"></div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent hidden"></div>
      <div
        role="dialog"
        className="box-border caret-transparent hidden z-[2147483647]"
      >
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
            <div className="box-border caret-transparent"></div>
          </div>
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent"></div>
              <button
                title="Close (Esc)"
                className="text-[13.3333px] caret-transparent text-center"
              ></button>
              <button
                title="Share"
                className="text-[13.3333px] caret-transparent text-center"
              ></button>
              <button
                title="Toggle fullscreen"
                className="text-[13.3333px] caret-transparent text-center"
              ></button>
              <button
                title="Zoom in/out"
                className="text-[13.3333px] caret-transparent text-center"
              ></button>
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent">
                    <div className="box-border caret-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent"></div>
            </div>
            <button
              title="Previous (arrow left)"
              className="text-[13.3333px] caret-transparent text-center"
            ></button>
            <button
              title="Next (arrow right)"
              className="text-[13.3333px] caret-transparent text-center"
            ></button>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="fixed box-border caret-transparent hidden h-0 w-0"></div>
      <div className="fixed bg-black box-border caret-transparent hidden h-full opacity-70 w-full z-2147483642 top-0"></div>
      <div
        role="dialog"
        className="absolute caret-transparent hidden h-full max-h-[700px] max-w-full z-[2147483642] left-0 top-0"
      >
        <div className="absolute caret-transparent h-full max-h-[700px] max-w-full min-h-full z-[2147483642] left-0 top-0">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent float-left"></div>
            <div className="box-border caret-transparent float-left"></div>
            <div className="box-border caret-transparent float-left"></div>
          </div>
          <div className="box-border caret-transparent clear-left h-full">
            <div className="box-border caret-transparent clear-left float-left"></div>
            <div className="relative bg-white shadow-[rgba(0,0,0,0.25)_0px_0px_21px_8px] caret-transparent float-left h-full max-h-[700px] max-w-full overflow-hidden rounded-sm">
              <div className="absolute box-border caret-transparent indent-[-9999px] top-[-22px] right-[205px]"></div>
              <div className="absolute bg-white box-border caret-transparent h-full w-full left-0 top-0"></div>
              <div className="absolute box-border caret-transparent h-10 text-center w-10 -ml-5 -mt-5 left-2/4 top-2/4 before:accent-auto before:bg-stone-600 before:box-border before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-3/5 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-3/5 before:rounded-[100%] before:border-separate before:top-0 before:font-source_sans_pro after:accent-auto after:bg-stone-600 after:box-border after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-3/5 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-3/5 after:rounded-[100%] after:border-separate after:top-0 after:font-source_sans_pro"></div>
            </div>
            <div className="box-border caret-transparent float-left"></div>
          </div>
          <div className="box-border caret-transparent clear-left">
            <div className="box-border caret-transparent clear-left float-left"></div>
            <div className="box-border caret-transparent float-left"></div>
            <div className="box-border caret-transparent float-left"></div>
          </div>
        </div>
      </div>
      {/* <FloatingContact /> */}
      <img
        src="https://engage.townsquareinteractive.com/tr_pics/i?p=2372404&o=bG9hZGVy"
        className="fixed box-border caret-transparent h-px max-w-full align-top w-px left-0 bottom-0"
      />
      <img
        src="https://cm.g.doubleclick.net/pixel?google_nid=adventure_media_sarl&ad360uuid=7c349ce0-718d-4b45-8362-e675ed7faa8d&google_cm&google_hm=N2MzNDljZTAtNzE4ZC00YjQ1LTgzNjItZTY3NWVkN2ZhYThk"
        className="aspect-[auto_1/1] box-border caret-transparent hidden max-w-full align-top w-px"
      />
    </body>
  );
};

export default App