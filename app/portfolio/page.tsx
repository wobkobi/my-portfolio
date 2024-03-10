import React from "react";
import { cn } from "@/utils/cn";
import ExpandableBox from "@/components/ExpandableBox"; // Adjust the path as necessary

const PortfolioPage = () => {
  return (
    <div className={cn("min-h-screen ")}>
      <main className={cn("p-4 pt-20 text-center")}>
        <h1
          className={cn(
            "mb-8 text-4xl font-bold text-indigo_dye dark:text-caribbean_current",
          )}
        >
          Portfolio
        </h1>
        {/* education */}
        <section className={cn("mb-12")}>
          <h2
            className={cn(
              "mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current",
            )}
          >
            Education
          </h2>
          <div
            className={cn("flex flex-wrap items-stretch justify-center gap-4")}
          >
            <div className={cn("w-full max-w-[calc(33.333%_-_1rem)]")}>
              <ExpandableBox
                title="Bachelor of Computer and Information Sciences"
                summary="2021 - 2023"
              >
                <ul className="list-disc pl-5 text-left">
                  <li>
                    Majored in Software Development & Networks and Security
                  </li>
                  <li>Average grade of B+</li>
                </ul>
              </ExpandableBox>
            </div>
          </div>
        </section>
        <section className={cn("mb-12")}>
          <h2
            className={cn(
              "mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current",
            )}
          >
            Work Experience
          </h2>
          <div
            className={cn("flex flex-wrap items-stretch justify-center gap-4")}
          >
            <div className={cn("w-full max-w-[calc(25%_-_1rem)]")}>
              <ExpandableBox
                title="Lifeguard at Mt Albert Aquatic Centre"
                summary="10/2019 - 05/2023"
              >
                <ul className="list-disc pl-5 text-left">
                  <li>
                    Ensured strong safety measures, preventing the need for
                    water rescues during my time.
                  </li>
                  <li>
                    Consistently maintained a safe swimming area for all guests.
                  </li>
                  <li>
                    Quickly and effectively handled emergencies, ensuring
                    everyone's safety.
                  </li>
                  <li>
                    Regularly checked and kept the facility safe for visitors.
                  </li>
                  <li>
                    Took care of end-of-day cleaning, keeping the facility neat
                    and tidy.
                  </li>
                  <li>
                    Provided helpful and friendly service, responding to
                    visitors' needs and questions.
                  </li>
                </ul>
              </ExpandableBox>
            </div>
            <div className={cn("w-full max-w-[calc(25%_-_1rem)]")}>
              <ExpandableBox
                title="Lifeguard for Waitakere Water Polo"
                summary="06/2020 - 09/2020"
              >
                <ul className="list-disc pl-5 text-left">
                  <li>
                    Assisted my former water polo club with lifeguard duties.
                  </li>
                  <li>
                    Worked at West Wave Aquatic Center due to a shortage of
                    lifeguards.
                  </li>
                </ul>
              </ExpandableBox>
            </div>
            <div className={cn("w-full max-w-[calc(25%_-_1rem)]")}>
              <ExpandableBox
                title="Coach for Point Chevalier School"
                summary="11/2020 - 12/2020"
              >
                <ul className="list-disc pl-5 text-left">
                  <li>Coached a primary school flippa ball team.</li>
                  <li>
                    Brought experience from playing water polo up until 2020.
                  </li>
                  <li>The ages of the children ranged from 8 to 11.</li>
                </ul>
              </ExpandableBox>
            </div>
            <div className={cn("w-full max-w-[calc(25%_-_1rem)]")}>
              <ExpandableBox
                title="Night ﬁll Long Life Assistant for Woolworths"
                summary="11/2022 - 06/2023"
              >
                <ul className="list-disc pl-5 text-left">
                  <li>
                    Regularly worked night shifts, contributing to the store's
                    24/7 operation.
                  </li>
                  <li>
                    Handled heavy pallets and efficiently stocked shelves,
                    ensuring product availability.
                  </li>
                  <li>
                    Diligently prepared the store for its 7 am opening, ensuring
                    a smooth start to the day.
                  </li>
                  <li>
                    Occasionally supported the team during daytime shifts as
                    needed.
                  </li>
                  <li>
                    Worked reliably every Friday and Saturday night,
                    collaborating effectively with a team of 4 to 5 members.
                  </li>
                </ul>
              </ExpandableBox>
            </div>
          </div>
        </section>
        <section className={cn("mb-12")}>
          <h2
            className={cn(
              "mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current",
            )}
          >
            Projects
          </h2>
          <div
            className={cn("flex flex-wrap items-stretch justify-center gap-4")}
          >
            <div className={cn("w-full max-w-[calc(33.333%_-_1rem)]")}>
              <ExpandableBox
                key={1}
                title="Project 1"
                summary="Short summary of project"
              >
                Detailed information about Project 1.
              </ExpandableBox>
            </div>
          </div>
        </section>

        <section className={cn("mb-12")}>
          <h2
            className={cn(
              "mb-6 text-2xl font-semibold text-indigo_dye dark:text-caribbean_current",
            )}
          >
            Skills
          </h2>
          <div
            className={cn("flex flex-wrap items-stretch justify-center gap-4")}
          >
            <div className={cn("w-full max-w-[calc(33.333%_-_1rem)]")}>
              <ExpandableBox key={1} title="Skill 1" summary="Short summary">
                Detailed information about Skill 1.
              </ExpandableBox>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default PortfolioPage;
