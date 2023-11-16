import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer Frontend"
            subTitle="Google - (Jan 2023 - June 2023)"
            result="Seattle, WA"
            des="Worked with the Data Center Software team as a Frontend Software Engineer using Angular, Typescript."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Magna International (May 2022 - Sep 2022)"
            result="Detroit, MI"
            des="Interned at Magna International with the Last Mile Delivery Team to develop Autonoumous Driving Vehicle team as a Frontend Software Engineer to develop the Vehicle Dashboard."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="Cognizant Technology Solutions (Jan 2021 - Aug 2021)"
            result="Chennai, India"
            des="Interned at Cognizant as a Software Engineer in the Tech Stack of MERN Stack developing UI, React JS components, Virtual DOM, and workflows."
          />
          <ResumeCard
            title="Software Engineer Intern"
            subTitle="IamNEO(June 2020 - Dec 2020)"
            result="Chennai, India"
            des="Interned at IamNEO(Formerly Examly) as a Software Engineer in the Tech Stack of MERN Stack developing UI, working with Database technologies, REST services, UI/UX Wire Design from scratch."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
