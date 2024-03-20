import cn from "@/utils/cn";

function About() {
  return (
    <div className={cn("min-h-screen bg-white p-4 pt-20 text-center dark:bg-jet")}>
      <main className={cn("mx-auto flex max-w-[85%] flex-col items-center justify-center p-4 text-center")}>
        <h1 className={cn("text-4xl font-bold text-indigo_dye dark:text-caribbean_current")}>About Me</h1>
        <p className={cn("mt-2 text-gray-600 dark:text-platinum")}>Here's a little more about me.</p>

        {/* Introduction */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Introduction</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}></p>
        </section>

        {/* Background */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Background</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}></p>
        </section>

        {/* Interests */}
        <section className={cn("mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Interests</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}></p>
        </section>

        {/* Goals */}
        <section className={cn("mb-8 mt-6")}>
          <h2 className={cn("text-2xl font-semibold text-indigo_dye dark:text-caribbean_current")}>Goals</h2>
          <p className={cn("mt-2 text-gray-600 dark:text-platinum")}></p>
        </section>
      </main>
    </div>
  );
}

export default About;
