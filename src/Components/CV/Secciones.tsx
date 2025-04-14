import {Link} from 'react-router-dom';
import '../Home/Home.css'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export const Secciones = () => {
    const { t } = useTranslation();
    return (
    <div className='seccion-container'>
        <ul className='seccion-ul'>
            <li className='seccion-li'>
                <motion.div
                whileHover={{ scale: 1.1, transition: {duration: 0.2} }}
                initial={{ opacity: 1, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                >  
                <Link className="seccion-title" to="/experiencia">
                    <span className='line'></span>
                    <WorkHistoryIcon sx={{ color: "rgba(94, 234, 212, 1)", mr: 1, fontSize: 20 }} /><h3>{t('sections.experience')}</h3>
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