import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600">
      {/* Top bar with language and contact info */}
      <div className="container mx-auto flex justify-end items-center py-2 text-white text-sm">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span>ES</span>
            <span>|</span>
            <a href="tel:+5112009200">(+51) 01 200 9200</a>
          </div>
          <Link to="/agencias" className="hover:underline">
            Agencias/Empresas
          </Link>
        </div>
      </div>

      {/* Bottom nav (Hoteles, Paquetes, etc.) */}
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between py-2">
          <ul className="flex space-x-4 text-sm">
          <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>

            <li><Link to="/hoteles" className="hover:text-blue-600">HOTELES</Link></li>
            <li><Link to="/paquetes" className="hover:text-blue-600">PAQUETES</Link></li>
            <li><Link to="/promociones" className="hover:text-blue-600">PROMOCIONES</Link></li>
            <li><Link to="/organiza" className="hover:text-blue-600">ORGANIZA TU EVENTO</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
