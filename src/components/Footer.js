import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFacebook, faFontAwesome, faGithub, faHtml5, faLinkedin, faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

      <div className='footer'>
        <div className='red-Pablo'>
          <p>¡Contacta a Pablo!</p>
          <a href='https://www.linkedin.com/in/pablo-g%C3%B3mez-601868288/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon-red' />
          </a>
          <a href='https://www.facebook.com/Pablotesaurio' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} size='2x' className='icon-red' />
          </a>
          <a href='https://github.com/Pablitobellakito' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' className='icon-red' />
          </a>
        </div>
        <div className='red-Alfonso'>
        <p>Redes Sociales de Alfonso</p>
          <a href='https://www.linkedin.com/in/alfonsopintom/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon-red' />
          </a>
          <a href='https://github.com/foncheto' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} size='2x' className='icon-red' />
          </a>
          <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp} size='2x' className='icon-red' />
          </a>
        </div>
        <div className='red-Jorge'>
          <p>Redes Sociales de Jorge</p>
          <a href='https://www.linkedin.com/in/alfonsopintom/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon-red' />
          </a>
          <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon-red' />
          </a>
          <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon-red' />
          </a>
        </div>
        <div className='red-Pablo'>
          <p>Agradecimientos!</p>
          <FontAwesomeIcon icon={faCss3} size='2x' className='icon-red' />
          <FontAwesomeIcon icon={faFontAwesome} size='2x' className='icon-red' />
          <FontAwesomeIcon icon={faHtml5} size='2x' className='icon-red' />
          <FontAwesomeIcon icon={faReact} size='2x' className='icon-red' />
        </div>
      </div>
  );
};

export default Footer;
