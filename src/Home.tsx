import './Home.css';
import { motion } from "framer-motion";

var ihunt = "[Nov 2022 - Jun 2023] [8 meses]";
var appcar = "[Jul 2022 - Sept 2022] [3 meses]";
var valkiria = "[Ene 2022 - Jun 2022] [6 meses]";

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}

export const Home = () => {
  return (
    <>
    <div className="manu-container">

    <div className='info-container'>
    
    <motion.div
      className='title-animate'
      whileHover={{ 
        scale: 1.1,
        textShadow: "0px 0px 4px rgb(255,255,255)"}}       
      initial={{ opacity: 0, y: -150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}>
      <h1 className='manu-title'>Portafolio de Emanuel</h1>
    </motion.div>

    <motion.div
      className='title-animate'
      whileHover={{ 
        scale: 1.1,
        textShadow: "0px 0px 4px rgb(255,255,255)" }}       
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}>
      <h2 className='manu-subtitle'>Desarrollador</h2>  
    </motion.div>

    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    >
    <h1 className='about-me'> Sobre mi</h1>
    </motion.div>  
    <motion.div

    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 1, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    >
    <p className='description'>Ingeniero Informático con experiencia en el desarrollo de back-end, front-end de aplicaciones web y móvil. 
    Me considero una persona enérgica, activa y con vocación, para brindar lo mejor de mí en cada proyecto que se me presente.
    Tengo una gran capacidad para trabajar en equipo, con alta adaptación a cambios y a nuevos desafíos, tanto profesionales como personales.
    </p> 
    </motion.div>

    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 2 }}
    >
    <h1 className='experience'>Experiencia</h1>

    {/* PRIMERA EXPERIENCIA */}
    <h1 className='business-name'>iHunt</h1>
    <p className="job-time">{ihunt}</p>
    </motion.div>
    
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 2 }}
    whileHover={{ scale: 1.1 }}
    >
    <div className="card-container">
    <div className='job-card'>
    <h3 className='job-duty'>Tareas realizadas</h3>
    <p className='job-description'>Desarrollo del front-end del sitio web, Diseño de procesos para las interacciones de usuarios en el sitio web,
      Desarrollo de aplicaciones back-end para la página web, Creación y configuración de servidores y bases de datos,
      Garantizar la optimización multi-plataforma del sitio web para teléfonos móviles, Escritura de documentación,
      Responder a las necesidades técnicas de la organización y nuestros clientes, Diseño e implementación de planes de prueba.
    </p>
    </div>
    </div>
    <ul className='flex-wrap'>
      <li className='aptitudes-li'><div className='aptitudes-box'>.NET Framework</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Docker</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Python</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Django</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Materialize CSS</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Git</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
    </ul>
  </motion.div>
  {/* FIN PRIMERA EXP */}


  {/* SEGUNDA EXPERIENCIA */}
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 1 }}
    >
  <h1 className='business-name'>AppCar</h1>
  <p className="job-time">{appcar}</p>
  </motion.div>
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.1 }}
    >
    <div className="card-container">
    <div className='job-card'>
    <h3 className='job-duty'>Tareas realizadas</h3>
    <p className='job-description'>Desarrollo del front-end del sitio web, Diseño de procesos para las interacciones de usuarios en el sitio web,
    Escritura de documentación, Diseño e implementación de planes de prueba, Creación de APK's para test de aplicación móvil, Distribución de
    tareas con Zoho.
    </p>
    </div>
    </div>

    <ul className='flex-wrap'>
      <li className='aptitudes-li'><div className='aptitudes-box'>React Native</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>React js</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Ruby On Rails</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>BitBucket</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>GitLab</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Postgre SQL</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Node Js</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Zoho</div></li>
    </ul>

  </motion.div>
  {/* FIN SEGUNDA EXP */} 

  {/* TERCERA EXPERIENCIA */}
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 1 }}
    >
  <h1 className='business-name'>Valkiria</h1>
  <p className="job-time">{valkiria}</p>
  </motion.div>

    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{
      once: true,
    }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.1 }}
    >
    <div className="card-container">
    <div className='job-card'>
    <h3 className='job-duty'>Tareas realizadas</h3>
    <p className='job-description'>Desarrollo del front-end del sitio web, Desarrollo de tablas en SQL,
    Creación de funciones con JavaScript, Desarrollo de "Procedures" (procedimientos) SQL, Desarrollo de query's SQL,
    Recepción de datos de la BD con C#, Cargas masivas de datos a través de Excel.
    </p>
    </div>
    </div>
    <ul className='flex-wrap'>
      <li className='aptitudes-li'><div className='aptitudes-box'>.Net Framework</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>C#</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>Microsoft SQL Server</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>SQL</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
      <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
    </ul>
  </motion.div>

    </div>
    </div>

  </>
  );
};

