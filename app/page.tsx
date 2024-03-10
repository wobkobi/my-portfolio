import Head from "next/head";
import Nav from "@/components/Nav.client"; // Ensure the correct path
import { cn } from "@/utils/cn"; // Ensure the correct path

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className={cn(
          " flex min-h-screen flex-col items-center justify-center bg-white dark:bg-jet",
        )}
      >
        <h1
          className={cn("text-6xl text-indigo_dye dark:text-caribbean_current")}
        >
          Harrison Raynes
        </h1>
        <p className={cn("mt-4 text-jet dark:text-platinum")}>My portfolio</p>
      </div>
    </>
  );
};

export default HomePage;
