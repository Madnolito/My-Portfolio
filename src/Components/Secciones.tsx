import React from 'react';
import {Link} from 'react-router-dom';
import '../Home.css'
import { motion } from 'framer-motion';


export const Secciones = () => {
    return (
    <>
    <motion.div
    whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
    initial={{ opacity: 1, x: 300 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    >  
    <Link className="seccion-title" to="/experiencia">
        <h3>Experiencia</h3>
    </Link>
    </motion.div>  

    <motion.div
    whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
    initial={{ opacity: 1, x: 350 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    >  
    <Link className="seccion-title" to="/sobre-mi">
        <h3 >Sobre mi</h3>
    </Link>
    </motion.div>

    <motion.div
    whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
    initial={{ opacity: 1, x: 400 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    >  
    <Link className="seccion-title" to="/contacto">
        <h3>Contacto</h3>
    </Link>
    </motion.div>   
    </>

    );
 }