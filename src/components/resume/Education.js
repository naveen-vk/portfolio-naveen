import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Science in Computer Science"
            subTitle="University of Missouri - Kansas City( 2021 - 2022 )"
            result="3.6 GPA"
            des=" I've gained practical experience and developed proficiency in technologies like Python, Software Engineering, Data Analysis, and Software Development."
          />
          <ResumeCard
            title="Bachelor of Technology in Information Technology"
            subTitle="Sri Krishna College of Engineering and Technology( 2021 Grad )"
            result="3.4 GPA"
            des="Studied IT related subjects like Data Structures, DBMS, OOPS, ML, Web Development. "
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Meta Front-end developer Professional Certificate"
            subTitle="Meta - Coursera"
            result="Online"
            des="Learnt React Framework and made various project using the skills in this course."
          />
          <ResumeCard
            title="Intro to UI/UX development"
            subTitle="Georgia Institute of Technology"
            result="Online"
            des="User Experience design is design that is user centered. The goal is to design artifacts that allow the users to meet their needs in the most effective efficient and satisfying manner."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education