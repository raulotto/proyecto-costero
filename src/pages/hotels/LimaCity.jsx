import "./LimaCity.css";
import "./InternalMenu";
import InternalMenu from "./InternalMenu";

const LimaCity = () => {
  return (
    <>
      <InternalMenu />

      <div className="container mx-auto px-4 py-6">
        {/* Sección de Información del hotel */}
        <div className="flex justify-between items-center" id="resumen">
          <div>
            <p className="font-bold text-lg">
              Av. Salaverry 3060, Magdalena del Mar Lima, Perú
            </p>
            <p className="text-gray-600">reservas@costadelsolperu.com</p>
            <p className="text-gray-600">(+511) 2009200</p>
          </div>
          <div className="flex space-x-4">
            <button className="text-blue-600">Check in</button>
            <button className="text-blue-600">Check out</button>
          </div>
        </div>

        {/* Sección principal con descripción y mapa */}
        <div className="flex flex-wrap mt-6">
          {/* Columna izquierda: descripción del hotel */}
          <div className="w-full md:w-3/4">
            <h2 className="font-bold text-xl mb-4">
              ¡Bienvenido al Hotel Costa del Sol Wyndham Lima City!
            </h2>
            <p className="mb-4">
              Lima, es la única capital de Sudamérica con una envidiable vista y
              acceso al mar. Costa del Sol Wyndham Lima City es el hotel ideal
              para hacer turismo y negocios en la ciudad por su fácil acceso a
              los principales puntos turísticos y centros financieros.
            </p>
            <p className="mb-4">
              Descubre un escape perfecto para turistas y viajeros en Lima.
              Nuestro hotel ubicado en una de las zonas más seguras y exclusivas
              de Lima, te coloca a pasos de los mejores cafés, restaurantes y
              tiendas de clase mundial. Además, disfruta de un acceso rápido a
              los icónicos atractivos turísticos como el encantador centro
              colonial de Lima y el famoso malecón de la Costa Verde, que ofrece
              vistas impresionantes del océano Pacífico.
            </p>
            <button className="text-blue-600">Ver menos -</button>

            <p className="mt-4">
              Nuestro servicio reconocido mundialmente por Tripadvisor que
              cuenta con 144 cómodas habitaciones (Standard, Superior y Junior
              Suite), 6 salones de eventos, dos directorios, que permite la
              asistencia de 300 personas en simultáneo. Además, una amplia
              oferta de servicios que incluyen restaurante, bar, piscina,
              rooftop, gimnasio, spa, business center y estacionamiento, que te
              harán vivir una experiencia inolvidable en Lima City.
            </p>
          </div>

          {/* Columna derecha: mapa y sección lateral */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0 md:pl-4">
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="font-bold mb-2">Ubicación</p>
              <img
                src="URL_DE_LA_IMAGEN_DEL_MAPA"
                alt="Mapa"
                className="w-full rounded-lg mb-4"
              />
              <p className="font-bold mb-2">¿Qué encontrar cerca?</p>
              <ul className="list-none">
                <li className="flex justify-between">
                  <span>Malecón de la Costa Verde</span>
                  <span>4 min en auto o 12 min a pie.</span>
                </li>
                <li className="flex justify-between">
                  <span>Pirámide Huaca Huallamarca</span>
                  <span>8 min en auto.</span>
                </li>
                <li className="flex justify-between">
                  <span>Ruinas de Huaca Pucllana</span>
                  <span>15 min en auto.</span>
                </li>
                <li className="flex justify-between">
                  <span>Museo Larco</span>
                  <span>15 min en auto.</span>
                </li>
                <li className="flex justify-between">
                  <span>Larco Mar</span>
                  <span>20 min en auto.</span>
                </li>
                <li className="flex justify-between">
                  <span>Centro Histórico de Lima</span>
                  <span>30 min en auto.</span>
                </li>
                <li className="flex justify-between">
                  <span>Aeropuerto Internacional Jorge Chávez</span>
                  <span>40 min en auto.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Sección de Servicios */}
        <div>
          <h2 className="text-xl font-bold mb-4">Servicios</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <span className="icono">🏨</span>
              <span>Desayuno Incluido</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="icono">🏊‍♂️</span>
              <span>Piscina</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="icono">🧖‍♂️</span>
              <span>Spa</span>
            </div>
            {/* Agrega más servicios aquí siguiendo la misma estructura */}
          </div>
          <button className="text-blue-600 mt-4">Ver menos -</button>
        </div>

        {/* Sección de Horario de Servicios */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Horario de servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-start">
              <span className="icono">🍳</span>
              <div className="ml-2">
                <h3 className="font-bold">Desayuno Buffet</h3>
                <p className="text-sm">
                  L-V de 06:00 a 10:00 hrs
                  <br />
                  S-D y feriados de 06:00 a 11:00 hrs
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="icono">🏋️‍♂️</span>
              <div className="ml-2">
                <h3 className="font-bold">Gimnasio</h3>
                <p className="text-sm">Atención las 24 horas</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="icono">🏊‍♀️</span>
              <div className="ml-2">
                <h3 className="font-bold">Piscina</h3>
                <p className="text-sm">Atención de 08:00 a 20:00 hrs</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="icono">💆‍♂️</span>
              <div className="ml-2">
                <h3 className="font-bold">Spa</h3>
                <p className="text-sm">
                  Masajes de 11:00 a 18:00 hrs
                  <br />
                  Sauna de 9:00 a 17:00 hrs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Promoción */}
        <div className="mt-8" id="promocion">
          <img
            src="URL_DEL_BANNER_PROMOCION"
            alt="Promociones Cyberween"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6" id="beneficios">
        {/* Sección de Beneficios */}
        <div className="bg-blue-600 rounded-lg p-6 mb-8">
          <h2 className="text-white text-xl font-bold mb-4 text-center">
            Beneficios exclusivos por reservar en nuestra web
          </h2>
          <div className="flex justify-around items-center flex-wrap">
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">🚌</span>
              <p className="mt-2">Traslado al hotel</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">📶</span>
              <p className="mt-2">WiFi Gratis</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">⚡</span>
              <p className="mt-2">Ofertas de última hora</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">🐾</span>
              <p className="mt-2">Dog Friendly</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">☕</span>
              <p className="mt-2">Desayuno buffet</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <span className="icono text-4xl">💳</span>
              <p className="mt-2">Cuotas sin intereses</p>
            </div>
          </div>
        </div>

        {/* Sección de Promociones con medios de pago */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-4">
            Aprovecha nuestros beneficios con tu medio de pago
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-blue-700 text-white rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">BCP</h3>
              <p className="text-3xl font-bold">25%</p>
              <p className="text-sm">Exclusivo con Cuenta Sueldo</p>
              <a href="#" className="mt-4 underline">
                Ver beneficio →
              </a>
            </div>
            <div className="bg-blue-700 text-white rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">BCP</h3>
              <p className="text-3xl font-bold">25% dscto.</p>
              <p className="text-sm">Código promocional BCPCDS</p>
              <a href="#" className="mt-4 underline">
                Ver beneficio →
              </a>
            </div>
            <div className="bg-blue-900 text-white rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">BBVA</h3>
              <p className="text-3xl font-bold">25% dscto.</p>
              <p className="text-sm">Código promocional BBVACDS</p>
              <a href="#" className="mt-4 underline">
                Ver beneficio →
              </a>
            </div>
            <div className="bg-red-600 text-white rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">Scotiabank</h3>
              <p className="text-3xl font-bold">25% dscto.</p>
              <p className="text-sm">Código promocional SCOTIACDS</p>
              <a href="#" className="mt-4 underline">
                Ver beneficio →
              </a>
            </div>
            <div className="bg-blue-700 text-white rounded-lg p-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold">BCP</h3>
              <p className="text-3xl font-bold">12 CUOTAS</p>
              <p className="text-sm">Sin intereses</p>
              <a href="#" className="mt-4 underline">
                Ver beneficio →
              </a>
            </div>
          </div>
        </div>

        {/* Botón Ver Todos */}
        <div className="text-center">
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
            VER TODOS LOS BENEFICIOS
          </button>
        </div>
      </div>
    </>
  );
};

export default LimaCity;
