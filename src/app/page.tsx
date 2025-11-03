import Image from "next/image";
import photo from "../../public/mypic.png";
import next from "../../public/Next.svg";
import React from "../../public/React.svg";
import Redux from "../../public/Redux.svg";
import Js from "../../public/Js.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <section className="mb-24 flex flex-col items-start gap-y-6 gap-x-10 md:flex-row-reverse md:items-center animate-fade">
  <div className="flex items-center justify-center min-w-[200px] ">
      <Image
        src={photo}
        alt="personal"
        className="rounded-full h-[250px] w-[200px] md:h-[280px] md:w-[240px] dark:saturate-0 object-cover"
      />

  </div>

  <div>
    <h3 className="text-lg text-gray-700 dark:text-gray-300 mb-1">
      Hello, <span className="text-[#3e93d5]">I am</span>
    </h3>
    <h1 className="font-bold mb-4 text-2xl sm:text-3xl dark:text-white">
      Hani Darklt
    </h1>
    <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
      Welcome to my digital corner—I&apos;m a web developer and React specialist with a passion
      for clean interfaces, modular backend logic, and building things that just
      <span className="italic text-indigo-600 dark:text-indigo-400 px-2">
        feel right
      </span>
      . I love exploring how great UI and secure architecture can work in harmony, 
      whether I&apos;m deploying lightweight notes apps or sculpting larger full-stack builds.
      <br /><br />
      This space is where I share what I&apos;ve been building, learning, and refining. 
      Scroll down to explore some of my latest projects, or
      <a
        href="/about"
        className="underline underline-offset-4 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors px-2"
      >
        click here
      </a>
      if you&apos;re curious about the person behind the code.
    </p>

    <div className="flex gap-4 mt-8 justify-evenly">
      <Link
        href="/about"
            className="px-5 py-2 text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded-md transition"
      >
        About
      </Link>
      <Link
        href="/contact"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-300 dark:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-slate-700 rounded-md transition"
      >
        Contact
      </Link>
    </div>
  </div>
</section>

        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400 ">
            
            Current preferred stacks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
            <Image
              src={next}
              width={100}
              height={100}
              className="mx-auto"
              alt="next-logo"
            />
            <Image
              src={React}
              width={100}
              height={100}
              className="mx-auto"
              alt="react-logo"
            />
            <Image
              src={Redux}
              width={100}
              height={100}
              className="mx-auto"
              alt="redux-logo"
            />
            <Image
              src={Js}
              width={100}
              height={100}
              className="mx-auto"
              alt="js-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
