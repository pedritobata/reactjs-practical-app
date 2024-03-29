import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Home Page</h3>
    </MainLayout>
  );
}
