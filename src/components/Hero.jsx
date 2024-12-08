import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[#64ffda]">Bonjour, je m'appelle</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Laurent LUCE
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            Développeur Full-Stack
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] mx-auto">
            Fort d'une expérience solide de plus de 15 ans dans le développement logiciel et la gestion de projets techniques. 
            Je suis actuellement en transition de carrière vers le Product Management. 
            Une compréhension approfondie du cycle de développement logiciel et une capacité à traduire les besoins métier en solutions techniques.
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f]">
                Voir mes projets
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f]">
                Me contacter
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
