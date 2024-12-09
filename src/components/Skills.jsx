import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
      id: 2,
      name: 'CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
      id: 3,
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      id: 4,
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      id: 5,
      name: 'Tailwind',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      id: 6,
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
  ];

  return (
    <div name="competences" className="w-full h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">Compétences</p>
          <p className="py-4">Voici les technologies avec lesquelles je travaille</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 justify-center items-center">
          {skills.map(({ id, image, name }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-4 hover:scale-110 duration-500"
            >
              <img 
                className="w-20 mx-auto" 
                src={image} 
                alt={name} 
              />
              <p className="mt-4 text-[#8892b0]">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
