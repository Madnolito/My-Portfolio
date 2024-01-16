import { motion } from "framer-motion";
import '../Home.css'

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
          <p className='job-description'>Ingeniero Informático con experiencia en el desarrollo de back-end, front-end de aplicaciones web y móvil. <br></br> 
           Me considero una persona enérgica, activa y con vocación, para brindar lo mejor de mí en cada proyecto que se me presente. <br></br>
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