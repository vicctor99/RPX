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
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={animationStarted ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-blue-950 bg-[url('/images/pexels.jpg')] bg-bottom bg-cover pt-20 w-full h-full flex flex-col justify-center mx-auto px-5 md:px-28 lg:px-32 xl:px-72"
    >
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-semibold uppercase text-md sm:text-lg text-neutral-100 self-end"
          >
            Assessoria de Importação
          </motion.h2>
          <div className="w-full">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationStarted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-bold uppercase sm:text-8xl text-4xl text-neutral-100 bg-gray-500 bg-opacity-20 backdrop-blur-sm shadow-lg border-[2px] sm:p-8 p-4 rounded-sm text-center"
            >
              Global RPX TRADING
            </motion.h1>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2 }}
            className="text-2xl sm:text-4xl text-neutral-100 text-center py-10"
          >
            Especializada na construção de relações comerciais internacionais
            positivas e confiáveis.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <Button name="Entre em Contato" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
