import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Welcome to my web corner",
};
const About = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200 animate-fade">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          About Me
        </h1>
        <p className="text-lg sm:text-xl text-gray-500  leading-relaxed mb-10">
          I&apos;m
          <span className="font-semibold  text-[#3e93d5] px-1">Mohamad Darklt</span>,
          a full-stack developer with a strong focus on the MERN stack and a
          love for solving real-world problems with clean code and intuitive
          design. I enjoy sculpting secure backend logic, building seamless
          frontend experiences, and learning every step of the way.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          My Toolbox
        </h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            "React",
            "Next.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
            "Redux",
            "Node.js",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-slate-700 dark:text-indigo-300 rounded-full text-sm font-medium transition transform hover:scale-105 hover:bg-indigo-200 dark:hover:bg-slate-600 shadow-sm hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
          I thrive on refining deployment setups, chaining advanced MongoDB
          queries with precision, and crafting experiences that balance
          performance with elegance. From notes apps to backend refactors—I’m all in.”
        </p>
            <hr className="my-6 border-gray-300 dark:border-gray-600"></hr>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
          Beyond the Code
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10">
          Outside the console, you&apos;ll often find me immersed in anime like
          <span className="italic text-[#3e93d5] px-1">Frieren</span> or
          <span className="italic text-[#3e93d5] px-1">Violet Evergarden</span>
          —stories that blend emotion, artistry, and growth. That same
          storytelling mindset flows into my work: I approach building with
          intentionality, narrative, and care.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/projects"
            className="px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded-md transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-300 dark:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-slate-700 rounded-md transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
          Skills
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
          These are the technologies I&apos;ve been working with—some deeply
          mastered, others actively growing.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { name: "HTML", level: "Proficient" },
            { name: "CSS", level: "Proficient" },
            { name: "JavaScript", level: "Proficient" },
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Strong" },
            { name: "Express.js", level: "Intermediate" },
            { name: "Node.js", level: "Growing" },
            { name: "MongoDB", level: "Intermediate" },
            { name: "TypeScript", level: "Growing" },
            { name: "GraphQL", level: "Exploring" },
          ].map(({ name, level }) => (
            <span
              key={name}
              className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-slate-700 dark:text-indigo-300 rounded-full text-sm font-medium hover:scale-105 transition transform shadow-sm hover:shadow-md"
            >
              {name} : {level}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
