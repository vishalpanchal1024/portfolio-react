import React from "react";
import { Link } from "react-router-dom";

// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white w-full">
      <div className=" border-t border-gray-700 p-3  text-center">
        <p>&copy; {new Date().getFullYear()} Vishal . All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
