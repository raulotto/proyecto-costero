import React from "react";
import { Link } from "react-router-dom";

const InternalMenu = () => {
  return (
    <>
      {/* Menú de interno */}

      <div className="internal-menu" id="internal-menu-hotel">
        <div className="navigationMenuInterno flex justify-start">
          <ul className="flex space-x-6">
            <li>
              <Link to="#resumen" className="hover:text-orange-600">
                Resumen
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                Fotos
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                Habitaciones
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                Experiencias
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                Restaurantes
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                Beneficios
              </Link>
            </li>

            <li>
              <Link to="internalmenu" className="hover:text-orange-600">
                comentarios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InternalMenu;
