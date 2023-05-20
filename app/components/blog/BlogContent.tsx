"use client";

import Image from "next/image";
import Button from "../Button";

const blogData = [
  {
    day: "20/03/2023",
    title: "Exportação de minério de ferro em baixa",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
    src: "/images/mulher-escalando-no-trem-retro.jpg",
  },
  {
    day: "05/03/2023",
    title: "Exportação de café em alta",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
    src: "/images/fundo-de-graos-de-cafe.jpg",
  },
  {
    day: "28/02/2023",
    title: "Aumento de 32,5% do trigo",
    text: "Especialmente com a China e a Ásia, nossa experiência em comércio exterior foi construída ao longo de mais de 15 anos de prática de importação e vivência do mercado internacional.",
    src: "/images/plantas-de-trigo.jpg",
  },
];

const BlogContent = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 py-7">
      {blogData.map((data, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between"
        >
          <Image
            className="mb-6 h-[300px] cursor-pointer hover:opacity-90 transition rounded-sm"
            src={data.src}
            alt="Imagem Notícia"
            width={1000}
            height={200}
          />
          <span className="text-sm">{data.day}</span>
          <span className="border-red-500 border-t-[4px] w-16 mb-2"></span>
          <h1 className="mb-4 font-bold text-3xl text-slate-900">
            {data.title}
          </h1>
          <p className="mb-6 font-semibold text-md">{data.text}</p>
          <span className="border-[1px] mb-4"></span>
          <Button name="Continuar Lendo" />
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
