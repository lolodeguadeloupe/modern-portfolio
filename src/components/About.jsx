import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center text-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 justify-center items-center">
          <motion.div 
            className="sm:text-right pb-8 pl-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">
                À Propos
              </p>
            </div>
          </motion.div>
          <div>
            <p className="text-[#8892b0]">
              • Proactif - Je suis force de propositions<br />
              • À l'écoute - Cela me permet d'être efficace pour un travail en équipe<br />
              • Rigoureux<br /><br />
              <strong>Langues:</strong><br />
              • Français (natif)<br />
              • Anglais (professionnel)<br /><br />
              <strong>Informations complémentaires:</strong><br />
              • Basé à Balma (31130)<br />
              • Télétravail ou présentiel<br />
              • Permis B<br />
              • Véhicule personnel
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div 
            className="sm:text-right text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>Bonjour, je suis ravi de vous rencontrer. N'hésitez pas à explorer mon portfolio.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>
              Je suis passionné par la création d'excellentes expériences numériques qui améliorent
              la vie des personnes qui m'entourent. Je me spécialise dans la création de solutions
              web pour des clients allant des individus aux petites entreprises.
              Mon expertise s'étend du design à l'implémentation complète de solutions web modernes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
