import React from "react";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/footer.jsx";
import {
  PrimaryButton,
  SocialMediaButtons,
} from "./components/buttons/Buttons.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./components/pages/Home.jsx";
import Project from "./components/pages/Project.jsx";
import Skills from "./components/pages/Skills.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

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

        <div className="p-1 " id="#skills">

        <Home />
</div>

        <div className="p-5 px-10" id="#skills">
          <h2 className="text-4xl text-gray-200 text-center pb-10 font-extrabold">Projects</h2>
          <Project />
        </div>

        <div className="p-5 px-10" id="#skills">
        <h2 className="text-4xl text-gray-200 text-center pb-10 font-extrabold">Skills</h2>
          <Skills />
        </div>

        <div className="p-5 px-10" id="#skills">
        <h2 className="text-4xl text-gray-200 text-center pb-10 font-extrabold">About</h2>
          <About />
        </div>
        <div className="p-5 px-10 pb-20" id="#skills">
        <h2 className="text-4xl text-gray-200 text-center pb-10 font-extrabold">Contact Me</h2>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
