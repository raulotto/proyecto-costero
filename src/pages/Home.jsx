import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página principal.</p>

      <div>
  When controlling the flow of text, using the CSS property
  <span class="inline">display: inline</span>
  will cause the text inside the element to wrap normally.

  While using the property <span class="inline-block">display: inline-block</span>
  will wrap the element to prevent the text inside from extending beyond its parent.

  Lastly, using the property <span class="block">display: block</span>
  will put the element on its own line and fill its parent.
</div>
    </div>
  );
}

export default Home;
