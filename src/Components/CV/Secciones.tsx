import { Link, useLocation} from 'react-router-dom';
import '../Home/Home.css'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export const Secciones = () => {
  const location = useLocation();
  const [expBouncedOff, setExpBouncedOff] = useState(false);

  // Si esta en /experiencia, apago el bounce
  useEffect(() => {
    if (location.pathname === "/experiencia") {
      setExpBouncedOff(true);
    }
  }, [location.pathname]);

  // detecta si esta en "/"
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

const shouldBounce = isHome && !expBouncedOff;

    const { t } = useTranslation();
    return (
    <div className='seccion-container'>
        <ul className='seccion-ul'>
            <li className="seccion-li">
            <motion.div
                initial={{ opacity: 1, x: 300 }}
                animate={
                shouldBounce
                    ? {
                        opacity: 1,
                        x: 0,
                        y: [0, -6, 0],
                        scale: [1, 1.03, 1],
                    }
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                    }
                }
                transition={
                shouldBounce
                    ? {
                        x: { duration: 0.3 },
                        y: {
                        duration: 0.9,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.6,
                        },
                        scale: {
                        duration: 0.9,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 0.6,
                        },
                    }
                    : {
                        x: { duration: 0.3 },
                    }
                }
                whileHover={{
                scale: 1.1,
                opacity: 1,
                y: 0, // que no “salte” bajo el mouse
                transition: { duration: 0.2 },
                }}
            >
                <Link
                className="seccion-title"
                to="/experiencia"
                onClick={() => setExpBouncedOff(true)} // al click se apaga el bounce
                >
                <span className="line"></span>
                <WorkHistoryIcon sx={{ color: "rgba(94, 234, 212, 1)", mr: 1, fontSize: 20 }} />
                <h3>{t("sections.experience_2")}</h3>
                </Link>
            </motion.div>
            </li>
            <li>
                <motion.div
                whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
                initial={{ opacity: 1, x: 350 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                >  
                <Link className="seccion-title" to="/habilidades">
                    <span className='line'></span>
                    <PsychologyIcon  sx={{ color: "rgba(94, 234, 212, 1)", mr: 1, fontSize: 20 }} /><h3>{t('sections.skills')}</h3>
                </Link>
                </motion.div>
            </li>            
            <li>
                <motion.div
                whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
                initial={{ opacity: 1, x: 350 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                >  
                <Link className="seccion-title" to="/sobre-mi">
                    <span className='line'></span>
                    <PersonIcon  sx={{ color: "rgba(94, 234, 212, 1)", mr: 1, fontSize: 20 }} /><h3>{t('sections.about')}</h3>
                </Link>
                </motion.div>
            </li>
            <li>
                <motion.div
                whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
                initial={{ opacity: 1, x: 400 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                >  
                <Link className="seccion-title" to="/contacto">
                    <span className='line'></span>
                    <EmailIcon  sx={{ color: "rgba(94, 234, 212, 1)", mr: 1, fontSize: 20 }} /><h3>{t('sections.contact')}</h3>
                </Link>
                </motion.div>   
            </li>
        </ul>
    </div>
    );
 }