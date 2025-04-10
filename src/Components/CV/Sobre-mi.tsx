import { motion } from "framer-motion";
import '../Home/Home.css'

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}
export const Sobremi = () => {

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
          <h1 className='experience'>Sobre mi</h1>

          {/* PRIMERA EXPERIENCIA */}
          <h1 className='business-name'>Perfil</h1>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.1 }}
          >
          <div className="card-container">
          <div className='job-card'>
          <p className='job-description'>
          Ingeniero Informático y Desarrollador de software con experiencia en el desarrollo de aplicaciones web y móviles, abordando tanto el front-end como el back-end. <br></br> <br></br> 
          He participado en proyectos para múltiples empresas, contribuyendo al diseño de interfaces, procesamiento de datos, consumo de APIs desde el front, construcción de consultas eficientes, procedimientos almacenados y estructuras de bases de datos. <br></br> <br></br> 
          Me destaco por ser una persona enérgica, activa y con vocación, para brindar lo mejor de mí en cada proyecto que se me presente. <br></br> <br></br> 
          Tengo una gran capacidad para trabajar en equipo, con alta adaptación a cambios y a nuevos desafíos, tanto profesionales como personales.
          </p>
          </div>
          </div>
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
        <h1 className='business-name'>Habilidades</h1>
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
          <p className='job-description'>
          Habilidades comunicativas.<br></br>
          Resolución eficiente de problemas.<br></br>
          Trabajo metódico y proactivo.<br></br>
          Nivel alto/avanzado de inglés oral y escrito.
          </p>
          </div>
          </div>
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
          transition={{ duration: 1.5 }}
          >
        <h1 className='business-name'>Formación</h1>
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
          <p className='job-description'>Ingeniería en informática, Universidad INACAP (2017-2021).
          </p>
          </div>
          </div>
        </motion.div>


        {/* CUARTA EXPERIENCIA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.5 }}
          >
        <h1 className='business-name'>Intereses</h1>
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
          <p className='job-description'>
          Calistenia.<br></br>
          Videojuegos.<br></br>
          Fútbol, Básquetbol, Ping- Pong.<br></br>

          </p>
          </div>
          </div>
        </motion.div>
    </>

    );
 }