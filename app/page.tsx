import Head from "next/head";
import Nav from "@/components/Nav.client"; // Ensure the correct path
import { cn } from "@/utils/cn"; // Ensure the correct path

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-jet dark:bg-indigo_dye flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-caribbean_current dark:text-caribbean_current-600 text-6xl">
          Welcome to My Website
        </h1>
        <p className="text-platinum dark:text-platinum-300 mt-4">
          Discover my world of development.
        </p>
      </div>
    </>
  );
};

export default HomePage;
