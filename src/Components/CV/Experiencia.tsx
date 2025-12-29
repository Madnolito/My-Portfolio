import { motion } from "framer-motion";
import '../Home/Home.css'
import { useTranslation } from 'react-i18next';

let ihunt = "[Nov 2022 - Jun 2023] [8 meses]";
let appcar = "[Jul 2022 - Sept 2022] [3 meses]";
let valkiria = "[Ene 2022 - Jun 2022] [6 meses]";


const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}

export const Experiencia = () => {
  
const { t } = useTranslation();
let terra = `[Ago 2023] [${t('experience.present')}]`;
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
          <h1 className='experience'>{t('sections.experience')}</h1>
          </motion.div>
        {/* EXPERIENCIA ACTUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.7 }}
          >
        <h1 className='business-name'>{t("experience.jobs.0.title")}</h1>
        <p className="job-time">{terra}</p>
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
          <h3 className='job-duty'>{t("experience.subtitle")}</h3>
          <p className='job-description'>{t("experience.jobs.0.description")}</p>
          </div>
          </div>

          <ul className='flex-wrap'>
            <li className='aptitudes-li'><div className='aptitudes-box'>React Native</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>React js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>ASP.NET Core Web API</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Ionic Framework</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>PostgreSQL</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>SQL Server</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Vue js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>XSLT</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>XML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>C#</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Vitest</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Node Js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Jenkins</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>SonarQube</div></li>
          </ul>

        </motion.div>
        {/* FIN EXPERIENCIAL ACTUAL*/}           

          {/* PRIMERA EXPERIENCIA */}
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1 }}
          >
        <h1 className='business-name'>iHunt</h1>
        <p className="job-time">{ihunt}</p>
        </motion.div>

          
          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1}}
          whileHover={{ scale: 1.1 }}
          >
          <div className="card-container">
          <div className='job-card'>
          <h3 className='job-duty'>{t("experience.subtitle")}</h3>
          <p className='job-description'>{t("experience.jobs.1.description")}</p>
          </div>
          </div>
          <ul className='flex-wrap'>
            <li className='aptitudes-li'><div className='aptitudes-box'>.NET Framework</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Docker</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Python</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Django</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Materialize CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Git</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
          </ul>
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
          transition={{ duration: 1.2 }}
          >
        <h1 className='business-name'>AppCar</h1>
        <p className="job-time">{appcar}</p>
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
          <h3 className='job-duty'>{t("experience.subtitle")}</h3>
          <p className='job-description'>{t("experience.jobs.2.description")}</p>
          </div>
          </div>

          <ul className='flex-wrap'>
            <li className='aptitudes-li'><div className='aptitudes-box'>React Native</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>React js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Ruby On Rails</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>BitBucket</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>GitLab</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Postgre SQL</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Node Js</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Zoho</div></li>
          </ul>

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
          transition={{ duration: 1 }}
          >
        <h1 className='business-name'>Valkiria</h1>
        <p className="job-time">{valkiria}</p>
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
          <h3 className='job-duty'>{t("experience.subtitle")}</h3>
          <p className='job-description'>{t("experience.jobs.3.description")}</p>
          </div>
          </div>
          <ul className='flex-wrap'>
            <li className='aptitudes-li'><div className='aptitudes-box'>.Net Framework</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>C#</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>JavaScript</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>GitHub</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Visual Studio Code</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>Microsoft SQL Server</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>SQL</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>CSS</div></li>
            <li className='aptitudes-li'><div className='aptitudes-box'>HTML</div></li>
          </ul>
        </motion.div>
    
    
    </>

    );
 }