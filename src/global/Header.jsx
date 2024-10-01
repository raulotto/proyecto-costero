import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='root'>
        <div className="layoutGeneral">
          <header>
            {/* Barra Top Menu */}
            <div className='top-bar-menu bg-blue-700 py-2 text-sm'>
              <div className='container mx-auto flex justify-end space-x-6 text-white'>
                <ul className='flex space-x-4'>
                  <li><a href="#" className="hover:text-blue-300">ES</a></li>
                  <li>(+51) 01 200 9200</li>
                  <li><a href="#" className="hover:text-blue-300">Agencias/Empresas</a></li>
                </ul>
              </div>
            </div>

            {/* Barra Menú principal */}
            <div className='main-menu bg-white py-4'>
              <div className="container mx-auto grid grid-cols-3 items-center">

                {/* Logo */}
                <div className='headerLogo flex justify-start'>
                  <Link to="/">
                    <img src="https://www.costadelsolperu.com/wp-content/uploads/2022/12/logo-costa-color1.svg" alt="Logo Costa del Sol" className="h-10" />
                  </Link>
                </div>

                {/* Botón central */}
                <div className='centerButton flex justify-center'>
                  <a href="#" className="text-blue-700 border border-blue-700 px-4 py-2 rounded-md font-semibold hover:text-orange-500 hover:border-orange-500">
                    Planifica tus vacaciones soñadas
                  </a>
                </div>

                {/* Menú de navegación */}
                <div className='navigationMenu flex justify-end'>
                  <ul className="flex space-x-6 text-blue-700">
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
