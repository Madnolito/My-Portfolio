import { motion } from "framer-motion";
import '../Home/Home.css'
import { useTranslation } from 'react-i18next';

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}
export const Sobremi = () => {

const { t } = useTranslation();

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
          <h1 className='experience'>{t("about_me.title")}</h1>

          {/* PRIMERA EXPERIENCIA */}
          <h1 className='business-name'>{t("about_me.section.0.title")}</h1>
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
          {t("about_me.section.0.description_1")} <br></br> <br></br> 
          {t("about_me.section.0.description_2")} <br></br> <br></br> 
          {t("about_me.section.0.description_3")} <br></br> <br></br> 
          {t("about_me.section.0.description_4")}
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
        <h1 className='business-name'>{t("about_me.section.1.title")}</h1>
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
          {t("about_me.section.1.description_1")}<br></br>
          {t("about_me.section.1.description_2")}<br></br>
          {t("about_me.section.1.description_3")}<br></br>
          {t("about_me.section.1.description_4")}
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
        <h1 className='business-name'>{t("about_me.section.2.title")}</h1>
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
          <p className='job-description'>{t("about_me.section.2.description")}</p>
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
        <h1 className='business-name'>{t("about_me.section.3.title")}</h1>
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
          {t("about_me.section.3.description_1")}<br></br>
          {t("about_me.section.3.description_2")}<br></br>
          {t("about_me.section.3.description_3")}<br></br>

          </p>
          </div>
          </div>
        </motion.div>
    </>

    );
 }