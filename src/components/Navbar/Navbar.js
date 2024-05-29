import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 back">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="font-mono title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Daniel Chaves
          </a>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Trabajos anteriores
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonios
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/daniel9805/" className="mr-5 hover:text-white">
          <img
            className="iconos"
            alt="hero"
            src="./linkedin.png"
          />
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-emerald-700 text-white border-0 py-1 px-3 focus:outline-none hover:bg-emerald-900 rounded text-base mt-4 md:mt-0">
          ¡Contrátame!
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}