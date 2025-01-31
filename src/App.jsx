import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/footer.jsx";
import {
  PrimaryButton,
  SocialMediaButtons,
} from "./components/buttons/Buttons.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function App() {
  const canvasRef = useRef("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5,
    }));

    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <>
      <div className="relative min-h-screen  flex-col items-center justify-center   bg-gradient-to-b from-[#020817] via-[#0f172a] to-emerald-900 ">
        <canvas
          ref={canvasRef}
          className="absolute  inset-0 "
          style={{ opacity: 0.9 }}
        />
        <Header />

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0  w-80 h-screen transition-transform -translate-x-full sm:translate-x-0  overflow-y-hidden z-10"
          aria-label="Sidebar"
        >
          <div className="h-full px-4 py-5  ">
            <div
              className="
                         my-14
                         px-2
                       bg-gray-50
                         bg-transparent
                         bg-opacity-2 
                         backdrop-blur-sm
                         rounded-md 
                         border-2 
                         border-solid 
                       border-gray-500
                         flex
                         flex-col "
            >
              <div className=" py-3 px-4">
                <div className=" py-3 flex flex-row flex-wrap">
                  <img
                    src="https://avatars.githubusercontent.com/u/106599132?v=4"
                    alt="profile image"
                    className="object-cover w-20 h-20 rounded-full  "
                  />
                  <div className="py-1 px-3 ">
                    <p className="text-lg text-white   ">Vishal Panchal</p>
                    <p className="text-sm text-gray-400  ">UserName : </p>
                    <p className="text-sm text-gray-300 py-1 ">Rank :</p>
                  </div>
                </div>
                <div className="pl-2 flex flex-row flex-wrap items-center  ">
                  <p className="text-sm text-white    ">
                    "about me bvsviurvir ubvurbvrub lorem djkvb rijvburb"
                  </p>
                </div>
                <div className="pt-5 flex flex-row flex-wrap items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-gray-300 fill-current "
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-white  px-3  ">Haryana , India</p>
                </div>
                <div className="pt-5 flex flex-row flex-wrap items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5  text-gray-300 fill-current "
                  >
                    <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="text-sm text-white  px-3  ">Website</p>
                </div>
                <div className="pt-5 flex flex-row flex-wrap items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 text-gray-300 fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="text-xs text-black  mx-2 px-2 rounded-lg bg-gray-200 ">
                    JavaScript
                  </p>
                  <p className="text-xs  text-black  mx-2 px-2 rounded-lg bg-gray-200 ">
                    C++
                  </p>
                </div>
                <SocialMediaButtons layout="grid grid-cols-3 py-10" />
                <PrimaryButton title={"RESUME DOWNLOAD"} />
              </div>
            </div>
          </div>
        </aside>

        <main className="h-full fixed top-0 left-0 right-0 pb-10  overflow-y-auto ">
          <div className="pl-14 pt-20 pb-10 pr-8  sm:ml-64  ">
            {/* <div className="pb-8  px-auto  rounded-lg  "> */}
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
