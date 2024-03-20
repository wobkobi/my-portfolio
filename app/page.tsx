import cn from "@/utils/cn"; // Ensure the correct path
import Head from "next/head";
import Link from "next/link"; // Import Link for internal navigation

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={cn("flex min-h-screen flex-col items-center justify-center bg-white dark:bg-jet")}>
        <h1 className={cn("mb-4 text-6xl text-indigo_dye dark:text-caribbean_current")}>Harrison Raynes</h1>

        <Link
          href="/portfolio"
          passHref
          className={cn(
            "mb-4 inline-block rounded-md bg-indigo_dye px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-caribbean_current dark:bg-caribbean_current dark:hover:bg-indigo_dye",
          )}>
          View Portfolio
        </Link>

        <a
          href="/files/HarrisonRaynesCV.pdf"
          download="HarrisonRaynesCV.pdf"
          className={cn(
            "inline-block rounded-md bg-gray-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800",
          )}>
          Download CV
        </a>
      </div>
    </>
  );
};

export default HomePage;
