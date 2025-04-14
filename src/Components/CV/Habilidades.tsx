import { motion } from "framer-motion";
import '../Home/Home.css'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const fadeInVariants = {
  animate: {
    opacity: 1,
    scale: 1
  },
}

const MotionDiv = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    variants={fadeInVariants}
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.div>
);

export const Habilidades = () => {

const { t } = useTranslation();

    return (
    <>
          <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          variants={fadeInVariants}
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.5 }}
          >
          <h1 className='experience'>{t('skills.title')}</h1>

          {/* PRIMER Habilidades */}
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
          <h1 className='business-name'>{t('skills.subtitle_1')}</h1>
          </motion.div>

          <MotionDiv>
            <div className='skill-description'>
            JavaScript
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            SQL
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Java
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            C#
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>
        
          <MotionDiv>
            <div className='skill-description'>
            Python
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            PHP
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Ruby
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>          
        {/* FIN PRIMER Habilidades */}

        {/* SEGUNDO Habilidades */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            variants={fadeInVariants}
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.7 }}
            >
          <h1 className='business-name'>{t('skills.subtitle_2')}</h1>
          </motion.div>
          
          <MotionDiv>
            <div className='skill-description'>
            HTML
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            CSS
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </MotionDiv>
          <MotionDiv>
            <div className='skill-description'>
            React Js
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            ASP.NET Core
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Node Js
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            SQL Server
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
           PostgreSQL
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>          

          <MotionDiv>
            <div className='skill-description'>
            APIs RESTful
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            React Native
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>          

          <MotionDiv>
            <div className='skill-description'>
            Ionic
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            XML
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>   

          <MotionDiv>
            <div className='skill-description'>
            Angular
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Next Js
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Vue Js
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv>
            <div className='skill-description'>
            Ruby on Rails
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>   

          <MotionDiv>
            <div className='skill-description'>
            Django
              <div className="star-color">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
            </div>
          </MotionDiv>         

    </>

    );
 }