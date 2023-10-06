import React from 'react';
import PabloImage from './img/Pablo.jpeg';
import AlfonsoImage from './img/Alfonso.jpg';
import JorgeImage from './img/Jorge.jpg';

const List = () => {
  return (
    <div className="integrantes">
      <div className="persona12">
          <img src={PabloImage} alt="Programador" width="150" height="200" />
          <section className="texto1">
            <h3>Pablo Gómez</h3>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 25 años</li>
            <section className="presentacion">
              <p>
              Mi nombre es Pablo Gómez, soy estudiante de Ingeniería Civil Informática. Tengo un leve conocimiento
              de hacer páginas web porque tuve el mismo profesor en Introducción a la Ingeniería. Además, me gusta jugar
              en la computadora y ver películas. A veces, cuando no tengo nada que hacer, me pongo a programar cosas básicas.
              Uno de mis hobbies es lavar autos, me gusta dejarlos limpios tanto por dentro como por fuera. No tengo una
              empresa de lavados, pero tengo muchos clientes frecuentes que a menudo me piden lavados. No cobro exageradamente
              mucho porque prefiero tener clientela frecuente a un costo razonable. Si alguien está interesado en tener su
              auto limpio, no dude en contactarme.
              </p>
            </section>
        </section>
      </div>

      <section className="persona12">
          <img src={AlfonsoImage} alt="Programador" width="150" height="200" />
        <section className="texto1">
          <h3>Alfonso Pinto</h3>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 21 años</li>
            <section className="presentacion">
              <p>
                Soy Alfonso, un estudiante de Ingeniería Civil Informática con una pasión por la tecnología y el
                aprendizaje. En mi tiempo libre, disfruto jugando al fútbol, ya sea en la cancha o viendo partidos.
                Además, me cautiva el mundo de la Inteligencia Artificial y su capacidad para
                transformar la forma en que interactuamos con la tecnología. Explorar algoritmos y crear sistemas
                inteligentes es un desafío que me motiva constantemente.
                Aparte de la tecnología, me sumerjo en
                libros de todo tipo, desde ficción hasta libros técnicos. Considero que cada página es una
                oportunidad para adquirir nuevos conocimientos y sumergirme en nuevas aventuras. Estoy emocionado
                por lo que el futuro de este curso tiene para nosotros y espero poder aprender y crecer junto a
                mis compañeros.
              </p>
            </section>
        </section>
      </section>

      <section className="persona12">
          <img src={JorgeImage} alt="Programador" width="150" height="200" />
        <section className="texto1">
          <h3>Jorge Becerra</h3>
            <li>Carrera: Ingeniería Civil Informática</li>
            <li>Edad: 20 años</li>
            <section className="presentacion">
              <p>
                Actualmente, estoy matriculado en la carrera de Ingeniería Civil Informática, y mi viaje académico
                comenzó en el año 2021. Además de mis estudios, dedico tiempo a diversas actividades que enriquecen
                mi vida. Tengo un gran interés por el deporte, particularmente el fútbol, el cual disfruto tanto
                viendo como jugando. La música es otra pasión que me define, ya que toco la guitarra con entusiasmo,
                y encuentro en ella una forma de expresión y creatividad.
                Además, me siento atraído por los
                videojuegos de última generación, explorando mundos virtuales y desafiando mi destreza en diversas
                plataformas. Con 20 años de edad, considero que mi enfoque y madurez en mis estudios y actividades
                resaltan cualidades prometedoras para mi crecimiento personal y profesional.
              </p>
            </section>
        </section>
      </section>
    </div>
  );
};

export default List;
