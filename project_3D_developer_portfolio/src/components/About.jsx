import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Je m'appelle GBESSEMEHLAN James Owen F. développeur full stack passionné, j'ai eu la chance de suivre une
        formation intensive à la Coding Academy by EPITECH-Bénin, où j'ai
        acquis des compétences solides en développement web et mobile. Cette
        expérience m'a permis de maîtriser des technologies de pointe tout en
        travaillant sur des projets concrets, me préparant ainsi à relever des
        défis dans des environnements exigeants. Actuellement en formation de
        licence à l'Institut de Formation et de Recherche en Informatique
        (IFRI), je continue d'enrichir mes connaissances et de perfectionner mes
        compétences. Mon expertise couvre une large gamme de technologies,
        allant de la création d'interfaces utilisateur dynamiques à la gestion
        de back-ends performants et sécurisés. Je suis constamment à la
        recherche de nouveaux défis technologiques pour innover et apporter des
        solutions adaptées aux besoins des utilisateurs, tout en garantissant
        une architecture robuste et évolutive.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
