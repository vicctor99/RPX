"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogContent from "./BlogContent";

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className="bg-gray-200 py-10 mx-auto px-5 md:px-28 lg:px-32 xl:px-72 w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        id="noticias"
        className="flex flex-col text-center"
      >
        <h1 className="text-3xl sm:text-4xl uppercase font-black text-red-600">
          Notícias
        </h1>
        <p className="text-slate-900">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, iste?
        </p>
        <span className="border-gray-400 border-t-[1px] mt-6"></span>
      </motion.div>
      <BlogContent />
    </section>
  );
};

export default Blog;
