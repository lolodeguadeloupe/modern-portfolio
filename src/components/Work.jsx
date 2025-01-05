import { motion } from "framer-motion";

const Work = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Fullstack",
      company: "ORANGE",
      period: "De février 2023 à avril 2023",
      location: "Blagnac",
      description: "Transformation d'applications PHP héritées en solutions modernes avec Vue.js et Nuxt.js pour le front-end, et GraphQL avec Laravel pour le back-end. Amélioration significative de l'expérience utilisateur et optimisation des performances."
    },
    {
      id: 2,
      title: "Développeur Fullstack",
      company: "TECH VALLEY",
      period: "D'octobre 2022 à janvier 2023",
      location: "Toulouse",
      description: "Débogage et optimisation d'applications web Laravel. Réalisation d'évolutions de code pour améliorer les fonctionnalités et la performance. Maintenance applicative et collaboration étroite avec l'équipe de développement."
    },
    {
      id: 3,
      title: "Ingénieur d'Études",
      company: "SNCF",
      period: "De juillet 2019 à septembre 2022",
      location: "Saint-Denis",
      description: "Maintenance d'outils Microsoft Access. Création d'une base PostgreSQL et développement d'une application web avec Laravel pour remplacer les outils existants. Mise en place de la base de données et migration des données. Utilisation des méthodologies Merise, UML et Design patterns."
    },
    {
      id: 4,
      title: "Ingénieur d'Études",
      company: "ASSU2000",
      period: "De février 2019 à juin 2019",
      location: "Noisy-le-sec",
      description: "Maintenance d'un intranet sous framework PHP propriétaire. Étude de migration vers Laravel ou Symfony 4."
    },
    {
      id: 5,
      title: "Ingénieur d'Études",
      company: "Freelance",
      period: "De janvier 2017 à janvier 2019",
      location: "Saint-Mandé",
      description: "Développement de sites WordPress. Utilisation du plugin WooCommerce pour la plateforme de ventes de billets. Mise en place d'une marketplace pour la vente de repas en ligne. Développement d'un site de crowdfunding."
    },
    {
      id: 6,
      title: "Expert TYPO3",
      company: "Thomascook",
      period: "De février 2015 à février 2017",
      location: "Paris",
      description: "Pilotage de projets de développement avancés sous TYPO3, garantissant des solutions performantes et innovantes."
    },
    {
      id: 7,
      title: "Ingénieur d'Études",
      company: "Dassault Systèmes",
      period: "D'avril 2014 à décembre 2014",
      location: "Velizy-Villacoublay",
      description: "Développement d'une application gérant la traduction."
    },
    {
      id: 8,
      title: "Expert TYPO3",
      company: "Direct Energie",
      period: "De juin 2014 à novembre 2014",
      location: "Paris",
      description: "Gestion de l'ensemble des sites annexes, blogs, mini sites, Lexique."
    },
    {
      id: 9,
      title: "Expert TYPO3",
      company: "Klesia",
      period: "De février 2013 à avril 2014",
      location: "Paris",
      description: "Migration d'un intranet TYPO3 version 4.5 vers la version 6.0. Correction de bugs existants. Evolution du site."
    },
    {
      id: 10,
      title: "Développement ASP",
      company: "Crédit-Agricole",
      period: "Décembre 2012",
      location: "Beauvais",
      description: "Correction d'un site intranet développé en ASP. Mise en place du serveur IIS et la base SQL server."
    },
    {
      id: 11,
      title: "Expert TYPO3",
      company: "Smile",
      period: "De juillet 2012 à décembre 2012",
      location: "Asnières sur Seine",
      description: "Corrections d'extensions développées avec TYPO3 et correction de bugs."
    },
    {
      id: 12,
      title: "Expert TYPO3",
      company: "Banque de France",
      period: "De septembre 2011 à juin 2012",
      location: "Asnières sur Seine",
      description: "Maintenance du site institutionnel et formation des utilisateurs pour le framework TYPO3."
    },
    {
      id: 13,
      title: "Expert TYPO3",
      company: "Peugeot PSA",
      period: "De septembre 2010 à avril 2011",
      location: "Asnières sur Seine",
      description: "Développement d'un intranet international gestion de plusieurs langues. Développement de plugins spécifiques."
    },
    {
      id: 14,
      title: "Expert TYPO3",
      company: "Freelance",
      period: "De janvier 2009 à décembre 2009",
      location: "",
      description: "Développement de sites pour la mairie de Sainte-Rose. Projets : Canbt.org, sainte-roseenfete.com, etudesetformations.com"
    }
  ];

  return (
    <div name="experiences" className="w-full min-h-screen bg-[#0a192f] flex items-center justify-center py-20">
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
