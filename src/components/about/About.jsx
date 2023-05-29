import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center">
      <img src="../logo.jpeg" alt="Logo" className="w-12 sm:w-20 mr-4" />
      <div>
        <h2 className="text-2xl font-bold">Bienvenido(a) a Acces Map</h2>
        <p className="my-2">
          Nos complace compartir quiénes somos y nuestra pasión por el desarrollo de software.
        </p>
        <p className="my-2">
          Somos un equipo dedicado de 6 apasionados por el desarrollo de software, y nuestro objetivo es solucionar el problema de accesibilidad de la información para personas con capacidades diferentes.
        </p>
        <p className="my-2">
          En Acces Map, creemos en el trabajo colaborativo. Nos esforzamos por brindar un servicio de alta calidad y relevancia a nuestros visitantes.
        </p>
        <p className="my-2">
          Nuestro equipo está formado por personas que trabajan arduamente para investigar, recopilar y compartir contenido interesante y actualizado.
        </p>
      </div>
    </div>
  );
}
