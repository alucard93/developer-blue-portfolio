import type { AppProps } from "next/app";
import { Toaster } from "sonner";
import { Poppins } from "@next/font/google"; // Importa a fonte

import Layout from "@/components/Other/Layout/Layout";
import "@/styles/globals.css";

// Configura a fonte Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adicione os pesos que deseja usar
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </main>
  );
}
