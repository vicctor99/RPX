"use client";

const UnderFooter = () => {
  return (
    <div className="bg-zinc-900 border-t-[1px] border-zinc-800 py-5 mx-auto xl:px-72 md:px-10 sm:px-5 px-5 w-full">
      <div className="flex text-center justify-between items-center xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col">
        <div className="text-zinc-500 font-light text-sm">
          Av. João Sacavem, 571 - Sala 804 - Centro - Navegantes - SC
        </div>
        <div className="text-end text-zinc-500 font-light text-sm">
          2023. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default UnderFooter;
