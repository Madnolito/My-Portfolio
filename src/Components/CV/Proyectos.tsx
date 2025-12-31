import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import '../Home/Home.css'
import { useTranslation } from 'react-i18next';
import SwiperCarrousel, {SwiperflowSlide} from "../SwiperCarrousel";
import { Box } from "@mui/material";
import videoUrl from "../../assets/video.mp4";
import videoUrl2 from "../../assets/video2.mp4";
import videoUrl3 from "../../assets/video3.mp4";
import videoUrl4 from "../../assets/video4.mp4";

const slides: SwiperflowSlide[] = [
  { type: "video", src: videoUrl, poster: "/img/poster.jpg" },
];

const slides2: SwiperflowSlide[] = [
  { type: "video", src: videoUrl2, poster: "/img/poster.jpg" },
];

const slides3: SwiperflowSlide[] = [
  { type: "video", src: videoUrl3, poster: "/img/poster.jpg" },
];

const slides4: SwiperflowSlide[] = [
  { type: "video", src: videoUrl4, poster: "/img/poster.jpg" },
];

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}
export const Proyectos = () => {

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
          <h1 className='experience'>{t('projects.title')}</h1>

          {/* PRIMER PROYECTO */}
          <a className="contact-a" href="https://madnolito.github.io/web-page-teacher/" target="e_blank"><h1 className='business-name'><CgWebsite  /> {t("projects.section.0.title")}</h1></a>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          >     
          <Box sx={{pt: '1rem', pb: '1rem'}}>
          <SwiperCarrousel slides={slides} />
          </Box>
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
          <p className='job-description'>{t("projects.section.0.description")}
          </p>
          </div>
          </div>
        </motion.div>
        {/* FIN PRIMER PROYECTO */}


        {/* SEGUNDO PROYECTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1 }}
          >
        <p className="contact-a"><h1 className='business-name'><CgWebsite  /> {t("projects.section.1.title")}</h1></p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1 }}
          > 
          <Box sx={{pt: '1rem', pb: '1rem'}}>
          <SwiperCarrousel slides={slides2} />
          </Box>   
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
          <p className='job-description'>{t("projects.section.1.description")}
          </p>
          </div>
          </div>

        </motion.div>
        {/* FIN SEGUNDO PROYECTO */} 

        {/* TERCER PROYECTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.6 }}
          >
        <a className="contact-a" href="https://clima.terra.com" target="e_blank"><h1 className='business-name'><CgWebsite  /> {t("projects.section.2.title")}</h1></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1 }}
          > 
          <Box sx={{pt: '1rem', pb: '1rem'}}>
          <SwiperCarrousel slides={slides3} />
          </Box>   
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
          <p className='job-description'>{t("projects.section.2.description")}
          </p>
          </div>
          </div>
        </motion.div>

        {/* CUARTO PROYECTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.6 }}
          >
        <a className="contact-a" href="https://horoscopo.terra.com" target="e_blank"><h1 className='business-name'><CgWebsite  /> {t("projects.section.3.title")}</h1></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 1.1 }}
          > 
          <Box sx={{pt: '1rem', pb: '1rem'}}>
          <SwiperCarrousel slides={slides4} />
          </Box>   
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
          <p className='job-description'>{t("projects.section.3.description")}
          </p>
          </div>
          </div>
        </motion.div>    
    </>

    );
 }