import { notFound } from "next/navigation";

import Link from "next/link";
import ClientOnly from "../components/ClientOnly";

export default function NotFoundCatchAll() {
  // notFound();
  return (
    <ClientOnly>
      <div className="flex flex-row items-center justify-center h-screen bg-neutral-50 text-zinc-800">
        <h1 className="border-r border-gray-300 mr-2 pr-2 text-3xl md:text-4xl font-bold">
          404
        </h1>
        <span>
          <Link href="/" className="text-1xl md:text-2xl font-bold">
            Página não encontrada.
          </Link>
        </span>
      </div>
    </ClientOnly>
  );
}
