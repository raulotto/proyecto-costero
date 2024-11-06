import React from 'react';
import { useForm } from 'react-hook-form';

const Claims = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.claim, // Se envía el mensaje como 'message'
        }),
      });

      if (response.ok) {
        alert('Reclamo enviado con éxito');
        reset(); // Reiniciar el formulario
      } else {
        alert('Error al enviar el reclamo');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Libro de Reclamaciones</h1>
      <p>Por favor, rellene el formulario a continuación para registrar su reclamo.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Nombre:</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Este campo es obligatorio' })}
            className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 w-full`}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block">Correo Electrónico:</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Este campo es obligatorio', 
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Por favor, ingresa un correo electrónico válido',
              }
            })}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 w-full`}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="claim" className="block">Reclamo:</label>
          <textarea
            id="claim"
            {...register('claim', { required: 'Este campo es obligatorio' })}
            className={`border ${errors.claim ? 'border-red-500' : 'border-gray-300'} rounded px-3 py-2 w-full`}
            rows="4"
          />
          {errors.claim && <p className="text-red-500">{errors.claim.message}</p>}
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar Reclamo
        </button>
      </form>
    </div>
  );
};

export default Claims;
