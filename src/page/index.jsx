import React from 'react';
import { Link } from "react-router-dom";
import "../page/css/index.css"

const Index = () => {
  return (
    <div class="parent">
      <div class="div4"><h1>Welcome Betuliaa</h1>
      <nav className="nav">
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="">Servicos</Link></li>
            <li><Link to="">Noticias e Eventos</Link></li>
            <li><Link to="">¿Que se puede hacer en betulia?</Link></li>
            <li><Link to="">¿Quien es betulia?</Link></li>
          </ul>
        </nav>
      
      </div>
    
      <div class="map-container">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d-73.289001!3d6.904848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6f8e123456789%3A0xabcdef1234567890!2sBetulia%2C%20Santander%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1616544290056!5m2!1ses-419!2sco"
   >
  </iframe>

  <div class="map-button-container">
    <a href="https://www.google.com/maps/place/Betulia,+Antioquia/@6.1115283,-75.9921098,16z/data=!3m1!4b1!4m6!3m5!1s0x8e46716416a8f28f:0xc334f050f8a5af02!8m2!3d6.11278!4d-75.98467!16s%2Fg%2F11clwphwnw?hl=es&entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" class="map-button">
      Guia
    </a>
  </div>
</div>


      <div class="div9">
      <div class="image-container">
    <img class="img" src="../src/assets/img/prueba.jpg" alt="" />
    <button class="center-button">acerca de </button>
  </div>
      </div>
      <div class="div10">oooooooooooooooooooooooooooooooooooooooooooooooooo</div>
      <div class="div11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut ea nesciunt expedita, facere reiciendis voluptates commodi reprehenderit ab quos itaque doloribus saepe laudantium! Veritatis dolor minima sunt earum fugit!</div>
    </div>

  );
};

export default Index;
