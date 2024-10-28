import React from "react";

const InternalMenu = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });

        window.history.pushState(null, "", `/limacity/${id}`);
      };

    
  return (
    <>
      {/* Menú de interno */}

      <div className="internal-menu" id="internal-menu-hotel">
        <div className="navigationMenuInterno flex justify-start">
          <ul className="flex space-x-6">
            <li><button onClick={() => scrollToSection('resumen')}>Resumen</button></li>
            <li><button onClick={() => scrollToSection('beneficios')}>Beneficios</button></li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default InternalMenu;
