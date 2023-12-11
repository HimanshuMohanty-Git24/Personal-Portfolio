import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { styles } from "../style";
import { Resume} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon ,source_code_link}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer'
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <img
          src={icon}
          alt='Resume'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ResSoc = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Resume & Socials</p>
        <h2 className={styles.sectionHeadText}>Let's Connect!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello There 👋, You can see my Resume and Socials below.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {Resume.map((Resume, index) => (
          <ServiceCard key={Resume.title} index={index} {...Resume} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ResSoc, "ResSoc");