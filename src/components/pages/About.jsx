import React from "react";

export default function About() {
  return (
    <blockquote className="relative grid items-center bg-transparent shadow-xl md:grid-cols-3 rounded-xl animate-glow">
      <img
        className="hidden object-cover w-full h-full rounded-l-xl md:block"
        style={{ clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%);" }}
        src="https://avatars.githubusercontent.com/u/106599132?v=4"
      />

      <article className=" p-6 md:p-8 md:col-span-2">
        <div className="space-y-8">
          <p className="text-gray-200 sm:leading-relaxed md:text-2xl">
            “Hi, I’m Vishal, a MERN stack developer with a passion for creating
            modern and efficient web applications. I work with MongoDB,
            Express.js, React, and Node.js to build user-friendly and scalable
            solutions. I focus on clean code, practical design, and delivering
            results that meet your needs. Whether it’s starting a project from
            scratch or improving an existing one, I enjoy turning ideas into
            functional and impactful websites.”
          </p>

          <footer className="flex items-center space-x-4 md:space-x-0">
            <img
              className="w-12 h-12 rounded-full md:hidden"
              src="https://avatars.githubusercontent.com/u/106599132?v=4"
            />
            <span className="font-bold text-lg text-cyan-400">
              Vishal Panchal
            </span>
          </footer>
        </div>
      </article>
    </blockquote>
  );
}
