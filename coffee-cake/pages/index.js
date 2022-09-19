import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div id="home" className="home h-screen w-screen">
      <Head>
        <title>Coffee Cake</title>
        <meta
          name="description"
          content="Goldentoaste's default portfolio website"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen content-center justify-center items-center align-center">
        <img className="h-40 mb-24" src="./rat-gong.svg"></img>

        <h1 className="text-2xl tracking-widest text-chamois-200 animate-pulse">
          Press any key to start
        </h1>
      </div>
    </div>
  );
}
