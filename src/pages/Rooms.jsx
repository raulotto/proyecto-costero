import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Hacemos una solicitud GET a la API de Strapi
    axios.get('http://localhost:1337/api/rooms')
      .then(response => {
        console.log(response.data); // Para ver la estructura de los datos que llegan desde la API
        setRooms(response.data.data); // Accedemos a 'data.data' debido a la estructura de la API de Strapi
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Habitaciones Disponibles</h1>
      <ul className="grid grid-cols-3 gap-10">
        {rooms.length > 0 ? (
          rooms.map(room => (
            <li className="border p-3 mb-3 rounded-lg bg-blue-400 text-white" key={room.id}>
              <h2>{room.nombre_room}</h2>
              <p>ID: {room.id}</p>
              <p>Fecha de Creación: {new Date(room.createdAt).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>Cargando habitaciones...</p> // Muestra un mensaje de carga mientras los datos se obtienen
        )}
      </ul>
    </div>
  );
};

export default Rooms;

