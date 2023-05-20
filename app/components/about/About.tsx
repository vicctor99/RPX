"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import { useInView } from "react-intersection-observer";

const About = () => {
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
    <div
      ref={ref}
      className="w-full bg-white flex items-center border-t-[1px] border-b-[1px] text-center sm:text-start py-10 sm:py-20 border-zinc-300"
    >
      <div className="px-5 md:px-28 lg:px-32 xl:px-72 grid items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={animationStarted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center bg-[url('/images/pexels.jpg')] bg-center bg-cover h-full"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={animationStarted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between w-full h-full gap-y-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={animationStarted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="border-t-[5px] border-red-600 w-[120px]"
          ></motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-black uppercase text-slate-900"
          >
            Saiba mais sobre a nossa{" "}
            <span className="text-red-600">Empresa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur adipisci sapiente earum laboriosam quod expedita velit
            temporibus nobis nisi? Recusandae saepe exercitationem atque
            cupiditate fuga nobis praesentium incidunt quaerat similique.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-700"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius
            culpa at aliquid quasi voluptate ullam unde, molestias aliquam, iure
            sunt ut architecto, dolores aspernatur?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={animationStarted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button name="Sobre Nós" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
