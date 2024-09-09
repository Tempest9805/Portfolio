import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, soy Daniel Chaves
            <br className="hidden lg:inline-block" /> Software Developer
          </h1>
          <p className="mb-8 leading-relaxed">
          Soy un desarrollador web Front-end con años de experiencia. Me especializo en crear experiencias web atractivas y funcionales utilizando tecnologías como HTML5, CSS3, JavaScript, React.js,Vue.js o AngularJS.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-cyan-600	 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 hover:text-white rounded text-lg">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="md:max-w-md md:w-64 md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./ryu.webp"
          />
        </div>
      </div>
    </section>
  );
}