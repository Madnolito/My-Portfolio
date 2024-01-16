import './Home.css';
import { motion } from "framer-motion";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Experiencia } from './Components/Experiencia';
import { Contacto } from './Components/Contacto';
import { Secciones } from './Components/Secciones';

export const Home = () => {

  const location = useLocation();
  
  return (
    <>
  <div className="manu-principal-container">
    <div className="manu-container-1">
      <div className='info-container'>
          
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
            transition={{ duration: 1.2 }}>
            <h2 className='manu-subtitle'>Desarrollador full-stack</h2>  
          </motion.div>

          <motion.div
            className='title-animate'    
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
                      
            <p className='description'>Ingeniero Informático con experiencia en el desarrollo de back-end, front-end de aplicaciones web y móvil. 
            Me considero una persona enérgica, activa y con vocación, para brindar lo mejor de mí en cada proyecto que se me presente.
            Tengo una gran capacidad para trabajar en equipo, con alta adaptación a cambios y a nuevos desafíos, tanto profesionales como personales.
            </p>
          </motion.div>

          <Secciones />

    </div>
      </div>
    <div className="manu-container-2">
      <div className="info-container">
        <Routes location={location} key={location.pathname}>
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>      
      </div>
    </div>
  </div>        

  </>
  );
};

