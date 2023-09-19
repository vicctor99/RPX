"use client";

import { useState, useEffect } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animationStarted ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      id="home"
      className="bg-slate-950 bg-[url('/images/darkbg.jpg')] bg-center bg-cover pt-20 w-full h-full flex flex-col justify-center mx-auto px-5 md:px-28 lg:px-32 xl:px-72"
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-semibold uppercase md:text-lg text-[14px] text-white self-end"
          >
            Assessoria de Importação
          </motion.h2>
          <div className="w-full mb-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-bold uppercase md:text-8xl text-4xl text-neutral-100 bg-gray-700 bg-opacity-20 backdrop-blur-sm shadow-lg border-[2px] md:p-8 p-4 rounded-sm text-center"
            >
              Global RPX TRADING
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-neutral-100 md:text-2xl text-xl text-center font-medium mt-4"
            >
              Facilitamos a importação, para que você possa expandir seus
              negócios globalmente com confiança.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <Button name="Entre em Contato" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
