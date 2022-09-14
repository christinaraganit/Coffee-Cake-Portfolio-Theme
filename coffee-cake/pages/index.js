import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Coffee Cake</title>
        <meta
          name="description"
          content="Goldentoaste's default portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-8xl">Press any key to start</h1>
      </div>
    </div>
  );
}
