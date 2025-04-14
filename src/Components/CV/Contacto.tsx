import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";
import '../Home/Home.css'
import { useTranslation } from 'react-i18next';

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}
export const Contacto = () => {

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
          <h1 className='experience'>{t('contact.title')}</h1>

          {/* PRIMER CONTACTO */}
          <a className="contact-a" href="https://mail.google.com/mail/u/0/#inbox" target="e_blank"><h1 className='business-name'><BiLogoGmail /> {t("contact.section.0.title")}</h1></a>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          >
          <div className="card-container">
          <div className='job-card'>
          <p className='job-description'>{t("contact.section.0.description")}
          </p>
          </div>
          </div>
        </motion.div>
        {/* FIN PRIMER CON */}


        {/* SEGUNDO CONTACTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1 }}
          >
        <a className="contact-a" href="https://github.com/Madnolito" target="e_blank"><h1 className='business-name'><SiGithub /> {t("contact.section.1.title")}</h1></a>
        </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.3 }}
          whileHover={{ scale: 1.1 }}
          >
          <div className="card-container">
          <div className='job-card'>
          <p className='job-description'>{t("contact.section.1.description")}
          </p>
          </div>
          </div>

        </motion.div>
        {/* FIN SEGUNDO CON */} 

        {/* TERCER CONTACTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.6 }}
          >
        <a className="contact-a" href="https://www.linkedin.com/in/emanuel-tapia-carcamo/" target="e_blank"><h1 className='business-name'><SiLinkedin /> {t("contact.section.2.title")}</h1></a>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.9 }}
          whileHover={{ scale: 1.1 }}
          >
          <div className="card-container">
          <div className='job-card'>
          <p className='job-description'>{t("contact.section.2.description")}
          </p>
          </div>
          </div>
        </motion.div>
    </>

    );
 }