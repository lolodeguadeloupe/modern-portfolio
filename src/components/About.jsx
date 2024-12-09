import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="a-propos" className="w-full h-screen bg-[#0a192f] flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center text-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center gap-8">
          <motion.div 
            className="w-full"
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
          <div className="w-full max-w-[600px]">
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
      </div>
    </div>
  );
};

export default About;
