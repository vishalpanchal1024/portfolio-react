import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Importing icons

const languageColors = {
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  TypeScript: "bg-blue-600",
  HTML: "bg-orange-500",
  CSS: "bg-purple-500",
  Java: "bg-red-600",
  C: "bg-gray-600",
  "C++": "bg-blue-700",
  PHP: "bg-indigo-500",
  Ruby: "bg-red-500",
  Go: "bg-cyan-500",
  Swift: "bg-red-400",
  Kotlin: "bg-purple-600",
  Rust: "bg-orange-600",
};

function Card({ title, description, status, lang, github, live }) {
  return (
    <div className="bg-transparent border border-gray-700 rounded-lg p-5 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl  ">
      {/* Title & Status */}
      <div className="flex items-center justify-between">
        <h3 className="lg:text-sm text-sm  font-semibold text-white flex items-center">
          <FaCode className="text-gray-400 mr-2" /> {title}
        </h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "Public"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2 mb-3">
        {description || "No description available"}
      </p>

      {/* Language Badge */}
      {lang && (
        <div className="flex items-center text-sm text-gray-300 mt-2">
          <span
            className={`inline-block w-3 h-3 mr-2 rounded-full ${
              languageColors[lang] || "bg-gray-500"
            }`}
          ></span>
          {lang}
        </div>
      )}

      {/* Buttons */}
      <div className="flex justify-between mt-4 ">
        <a
          href={github}
          className="flex items-center text-sm font-medium text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-lg border border-gray-600 transition-all shadow-md hover:shadow-lg animate-glow"
        >
          <FaGithub className="w-5 h-5 text-gray-300 mr-2" />
          GitHub
        </a>

        {live && (
          <a
            href={live}
            className="flex items-center text-sm font-medium text-gray-300 hover:bg-blue-600 px-4 py-2 rounded-lg border border-blue-500 transition-all shadow-md hover:shadow-lg"
          >
            Live Demo
            <FaExternalLinkAlt className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );
}

export { Card };
