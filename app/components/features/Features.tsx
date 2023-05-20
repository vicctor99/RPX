"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeaturesContent from "./FeaturesContent";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-gray-200 py-10 mx-auto px-5 md:px-28 lg:px-32 xl:px-72 w-full h-fit"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl uppercase font-bold text-red-600"
        >
          Nossos Serviços
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, iste?
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-gray-400 border-t-[1px] mt-6"
        ></motion.span>
      </motion.div>

      <FeaturesContent />
    </div>
  );
};

export default Features;
