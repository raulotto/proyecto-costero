import React from 'react';
import { Link } from 'react-router-dom';
import Claims from './forms/Claims';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Nuestros Hoteles */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4">Nuestros Hoteles</h3>
            <ul>
              {['Tumbes', 'Piura', 'Chiclayo', 'Trujillo Golf', 'Trujillo Centro', 'Cajamarca', 'Lima Ciudad', 'Lima Aeropuerto', 'Arequipa', 'Cusco', 'Pucallpa'].map((hotel) => (
                <li key={hotel}>
                  <a href="#" className="hover:underline">{hotel}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Sobre Nosotros */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4">Sobre Nosotros</h3>
            <ul>
              {['Lee nuestro Blog', 'Somos Dog Friendly', 'Reservas Grupos', 'Alcance y Políticas del Sistema Integrado de Gestión'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Atención al Cliente */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4">Atención al Cliente</h3>
            <ul>
              {['Preguntas Frecuentes', 'Facturación Electrónica', 'Facturación Electrónica Hoteles', 'Facturación Electrónica Pucallpa', 'Modificar Reserva', 'Términos y condiciones de reservas', 'Política de uso de datos personales', 'Política de uso aceptable'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contáctanos */}
          <div>
            <h3 className="font-bold text-blue-600 mb-4">Contáctanos</h3>
            <p>
              <span className="block">Av. Salaverry 3060, Magdalena</span>
              <span className="block">del Mar – Lima, Perú</span>
            </p>
            <p className="mt-2">
              <a href="tel:+5112009200" className="block hover:underline">Reservas: (+51) 01 200 9200</a>
              <a href="mailto:reservas@costadelsolperu.com" className="block hover:underline">reservas@costadelsolperu.com</a>
              <a href="mailto:agencias@costadelsolperu.com" className="block hover:underline">agencias@costadelsolperu.com</a>
              <a href="mailto:eventos@costadelsolperu.com" className="block hover:underline">eventos@costadelsolperu.com</a>
              <a href="mailto:empresas@costadelsolperu.com" className="block hover:underline">empresas@costadelsolperu.com</a>
            </p>
          </div>
        </div>

        {/* Social media and other icons */}
        <div className="mt-8 flex justify-between items-center">
          {/* Social media icons */}
          <div className="flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fas fa-paw"></i></a>
          </div>

          {/* Certifications and ClaimsBook */}
          <div className="flex space-x-8">
            <img src="" alt="Certificado Wyndham Green" className="h-10"/>
            <Link to="./global/forms/claims">
              <img src="/ruta-libro-reclamaciones.png" alt="Libro de Reclamaciones" className="h-10"/>
            </Link>
          </div>
        </div>


        {/* Bottom links */}
        <div className="mt-10 border-t pt-4 text-center">
          <p className="text-sm">
            © 2024 Costa del Sol Wyndham Hoteles. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:underline">Términos y condiciones</a>
            <a href="#" className="hover:underline">Política Web de Privacidad</a>
            <a href="#" className="hover:underline">Términos y condiciones Dog Friendly</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
