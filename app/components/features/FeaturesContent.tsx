"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../Button";

const featuresData = [
  {
    title: "Quero importar da China",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
  },
  {
    title: "Preciso de fornecedores",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
  },
  {
    title: "Descobrir oportunidades",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
  },
  {
    title: "Consultoria",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
  },
  {
    title: "Descobrir oportunidades",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
  },
];

const FeaturesContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 py-7"
    >
      {featuresData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border-red-500 border-t-[4px] w-16"
          ></motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="py-4 font-bold text-3xl text-slate-900"
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="mb-6 font-semibold text-md"
          >
            {data.text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          >
            <Button name="Saiba Mais" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturesContent;
