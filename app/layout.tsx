import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "Global RPX",
  description:
    "A Global RPX Trading é especializada na construção de relações comerciais internacionais positivas e confiáveis, especialmente com a China e a Ásia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
