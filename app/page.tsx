// pages/index.tsx

import Head from "next/head";
import Nav from "@/components/Nav.client";
import { cn } from "@/utils/cn";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Head>
        <title>Home</title>
      </Head>
      <div
        className={cn(
          "bg-timberwolf flex min-h-screen flex-col items-center justify-center",
        )}
      >
        <h1 className={cn("text-6xl text-white")}>Welcome to My Website</h1>
        <p className={cn("text-plum mt-4")}>
          Discover my world of development.
        </p>
      </div>
    </>
  );
};

export default HomePage;
