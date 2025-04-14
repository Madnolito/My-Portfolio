import './Home.css';
import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
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
            <h2 className='manu-subtitle'>{t('home.subtitle')} <FaComputer className='icon' /></h2>  
          </motion.div>

          <motion.div
            className='title-animate'    
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}>
                      
            <p className='description'>
            {t('home.description_1')}<br></br> <br></br>
            {t('home.description_2')}<br></br> <br></br>
            {t('home.description_3')}   
            </p>
          </motion.div>
    </>
  );
};

