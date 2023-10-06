import React from 'react';
import videoFile from './img/mi-video.mp4'; // Ruta al archivo de video
import foto from './img/happyhaloween.jpg'
import { Link } from 'react-router-dom';

const VideoComponent = () => {
  return (
    <div className='advertencia'>
        <div className='advertencia__titulo'>
            <p>Clausula 1. Este enlace tiene la etiqueta "No Abrir" por una razón. Al hacer clic en este enlace, aceptaste plenamente la responsabilidad de cualquier consecuencia que pueda ocurrir.
                <br/>
                <br/>
            Clausula 2. Ni el propietario de este sitio web ni las personas involucradas en su creación son responsables por cualquier daño moral, daño físico, psicológico, pérdida de peso, pérdida de cabello o inconveniente mentales que pueda surgir al hacer clic en este enlace. Por favor, piensa cuidadosamente antes de presionar otra cosa sin consentimiento
            <br/>
            <br/>
            </p>
        </div>
        <div className='advertencia__texto'>
            <video width="540" height="360" controls autoPlay playsInline>
                <source src={videoFile} type="video/mp4" />
                Tu navegador no admite el elemento de video.
            </video>
        </div>
        <Link to="/" className="navbar-link12"><p>No Abrir Aquí</p></Link>
    </div>
    
  );
};

export default VideoComponent;
