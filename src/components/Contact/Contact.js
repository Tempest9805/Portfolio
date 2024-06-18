import React, { useRef } from "react";
import emailjs from 'emailjs-com';

emailjs.init('Jxqx81oqVTnF_HO2M'); // Reemplaza 'tu_user_id' con tu ID de usuario de EmailJS

export default function Contact() {
  const formRef = useRef(null);
  function enviarEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_uz4ur47', 'template_hcd9i2g', e.target, 'Jxqx81oqVTnF_HO2M').then(res=>{
      alert("Gracias por tu interés, me comunicare contigo pronto!");
      console.log(res);
      formRef.current.reset();
    }).catch(err => console.error('Error al enviar correo:', err));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7856.935761372414!2d-84.44151890523952!3d10.06069512408126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa05acb6d4b4109%3A0xb18e6f4f34b0460!2sProvincia%20de%20Alajuela%2C%20Palmares!5e0!3m2!1ses!2scr!4v1718676072281!5m2!1ses!2scr"
          />
          <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md w-screen">
            <div className="lg:w-1/2 px-12">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Palmares <br />
                Costa Rica, Alajuela
              </p>
            </div>
            <div className="lg:w-1/2 px-12 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a href="mailto:danielchavesvargas98@gmail.com" className="text-indigo-400 leading-relaxed">
                danielchavesvargas98@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">+506-83656462</p>
            </div>
          </div>
        </div>
        <form ref={formRef} onSubmit={enviarEmail}
          netlify
          name="contact"
          data-netlify="true"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <input type="hidden" name="form-name" value="contact" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contáctame!
          </h2>
          <p className="leading-relaxed mb-5">
            ¿Te gusta lo que ves y quieres trabajar conmigo? ¡Contáctame en el siguiente formulario!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}