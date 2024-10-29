import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='root'>
        <div className="layoutGeneral">
          <header>
            {/* Barra Top Menu */}
            <div className='top-bar-menu bg-blue-700 py-2 text-xs md:text-sm'>
              <div className='container mx-auto flex justify-between md:justify-end space-x-4 md:space-x-6 text-white px-4'>
                <ul className='flex space-x-2 md:space-x-4'>
                  <li><a href="#" className="hover:text-blue-300">ES</a></li>
                  <li className='hidden sm:block'>(+51) 01 200 9200</li>
                  <li><a href="#" className="hover:text-blue-300">Agencias/Empresas</a></li>
                </ul>
              </div>
            </div>

            {/* Barra Menú principal */}
            <div className='main-menu bg-white py-2 md:py-4'>
              <div className="container mx-auto grid grid-cols-3 items-center px-4 md:px-0">

                {/* Logo */}
                <div className='headerLogo flex justify-start col-span-2 md:col-span-1'>
                  <Link to="/">
                    <img src="https://www.costadelsolperu.com/wp-content/uploads/2022/12/logo-costa-color1.svg" alt="Logo Costa del Sol" className="h-8 md:h-10" />
                  </Link>
                </div>

                {/* Icono menú hamburguesa */}
                <div className="md:hidden flex justify-end col-span-1">
                  <button onClick={toggleMenu} className="text-blue-700 focus:outline-none">
                    {/* Icono de hamburguesa */}
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </button>
                </div>

                {/* Botón central */}
                <div className='centerButton hidden md:flex justify-center'>
                  <a href="#" className="text-blue-700 border border-blue-700 px-2 py-1 md:px-4 md:py-2 rounded-md font-semibold hover:text-orange-500 hover:border-orange-500 text-xs md:text-base">
                    Planifica tus vacaciones soñadas
                  </a>
                </div>

                {/* Menú de navegación */}
                <div className={`navigationMenu ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end md:space-x-6 mt-2 md:mt-0 text-blue-700`}>
                  <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:text-base text-xs">
                    <li>
                      <Link to="/" className="hover:text-orange-600">
                        INICIO
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="hover:text-orange-600">
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link to="/contacto" className="hover:text-orange-600">
                        CONTACTO
                      </Link>
                    </li>
                    <li>
                      <Link to="/rooms" className="hover:text-orange-600">
                        ROOMS
                      </Link>
                    </li>
                    <li>
                      <Link to="/limacity" className="hover:text-orange-600">
                        LIMA CITY
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
