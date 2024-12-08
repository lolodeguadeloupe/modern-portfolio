import { motion } from "framer-motion";

const Work = () => {
  const experiences = [
    {
      id: 1,
      title: "Consultant informatique",
      company: "THOMASCOOK",
      period: "De février 2015 à mai 2016",
      description: "Chef de projet informatique. Responsable du développement de modules avec le CMS Typo3",
    },
    {
      id: 2,
      title: "Expert Typo3",
      company: "DIRECT ENERGIE",
      period: "D'avril 2014 à août 2014",
      description: "Création de mini-sites Direct Energie (parrainage/Blog Blog interne/Lexique/Webv...). Mise en place de gabarits pour les différents sites. Création de styles avec typography. Développement d'extensions spécifiques pour la version Typo3",
    },
    {
      id: 3,
      title: "Consultant informatique",
      company: "DASSAULT SYSTEME (Vélizy)",
      period: "D'avril 2014 à juillet 2014",
      description: "Projet SDL: développement d'un module de gestion des langues. Utilisation d'une extension (L10nmgr)",
    },
    {
      id: 4,
      title: "Expert typo3",
      company: "KLESIA (Paris)",
      period: "De février 2013 à juin 2013",
      description: "Migration d'un intranet typo3 vers Typo3 version 6.0. Correction des bugs existants. Faire évoluer le système pour la nouvelle version de Typo3. Création des nouvelles extensions métiers.",
    },
    {
      id: 5,
      title: "Consultant informatique",
      company: "CREDIT AGRICOLE",
      period: "Décembre 2012",
      description: "Correction d'une application intranet. Correction des bugs existants. Correction d'une application développée en asp. Utilisation de la base de données SQLSERVER. Paramétrage des serveur IIS, et SQLSERVER. Analyse, étude et développement",
    },
    {
      id: 6,
      title: "Expert Typo3",
      company: "SMILE (Paris)",
      period: "De juillet 2012 à septembre 2012",
      description: "Correction d'application développée à l'aide du CMS TYPO3. Analyse, étude et développement d'extensions. Corrections de bug.",
    }
  ];

  return (
    <div name="work" className="w-full min-h-screen bg-[#0a192f] flex items-center justify-center py-20">
      <div className="max-w-[1000px] w-full mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">
            Expériences
          </p>
          <p className="py-6 text-gray-300">Mes expériences professionnelles</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map(({ id, title, company, period, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:bg-[#233554] transition-all duration-300"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#64ffda] mb-2">{title}</h3>
                <h4 className="text-xl text-[#ccd6f6] mb-2">{company}</h4>
                <p className="text-[#8892b0] mb-3">{period}</p>
                <p className="text-[#8892b0] text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
