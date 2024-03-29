import { motion } from "framer-motion";
import '../Home.css'

var ihunt = "[Nov 2022 - Jun 2023] [8 meses]";
var appcar = "[Jul 2022 - Sept 2022] [3 meses]";
var valkiria = "[Ene 2022 - Jun 2022] [6 meses]";
var terra = "[Ago 2023] [Actualidad]";

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}
export const Experiencia = () => {

    return (
    <>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          >
          <h1 className='experience'>Experiencia</h1>
          </motion.div>
        {/* EXPERIENCIA ACTUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.7 }}
          >
        <h1 className='business-name'>Empleo Actual - Terra</h1>
        <p className="job-time">{terra}</p>
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
          <p className='job-description'>Desarrollo de scripts SQL seguros para la gestión de datos en entornos de producción, Gestión de flujos de datos entre tablas correlacionadas, Desarrollo de la interfaz de usuario móvil,
          Gestión de errores y manejo de conexiones en aplicaciones móviles, Gestión de tareas y planificación, Gestión de errores HTTP Sitio Web, Desarrollo web y diseño de interfaces de usuario, Mantenimiento de sitio web,
          Diseño y estilización de sitios web con CSS, Procesamiento de datos en formato XML.
          </p>
          </div>
          </div>

          <ul className='flex-wrap'>
            <li className='aptitudes-li'><div className='aptitudes-box'>React Native</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>React js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Ionic Framework</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>SQL Server</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Vue js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>XSLT</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>XML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>C#</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Node Js</div></li>
          </ul>

        </motion.div>
        {/* FIN EXPERIENCIAL ACTUAL*/}           

          {/* PRIMERA EXPERIENCIA */}
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1 }}
          >
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
          transition={{ duration: 1.1}}
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
          transition={{ duration: 1.2 }}
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
    
    
    </>

    );
 }