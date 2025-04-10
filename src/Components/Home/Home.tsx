import './Home.css';
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";


export const Home = () => {

  return (
    <>
          <motion.div
            className='title-animate'
            whileHover={{ 
              scale: 1.1,
              textShadow: "0px 0px 4px rgb(255,255,255)"}}       
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <h1 className='manu-title'>Emanuel Tapia</h1>
          </motion.div>

          <motion.div
            className='title-animate'  
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3 }}>
            <h2 className='manu-subtitle'>Desarrollador Full-Stack <FaComputer className='icon' /></h2>  
          </motion.div>

          <motion.div
            className='title-animate'    
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
                      
            <p className='description'>
            Soy un desarrollador de software con preferencia por el teletrabajo.<br></br> <br></br>
            Disfruto explorando nuevas tecnologías y me gusta manipular bases de datos. <br></br> <br></br>
            Actualmente, formo parte de la empresa Terra, aportando a su equipo con mi experiencia y entusiasmo por la innovación tecnológica.   
            </p>
          </motion.div>
    </>
  );
};

