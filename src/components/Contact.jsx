import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex items-center justify-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center text-center">
        <motion.form 
          method="POST" 
          action="https://getform.io/f/[your-form-endpoint]" 
          className="flex flex-col max-w-[600px] w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#64ffda]">Contact</p>
            <p className="py-4">Vous pouvez me contacter aux coordonnées suivantes :</p>
            
            <div className="flex flex-col space-y-4 text-[#8892b0] items-center justify-center w-full">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>laurent.luce@hotmail.com</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Balma (31130), Île-de-France, Paris, Toulouse</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>07 66 33 46 53</span>
              </div>
            </div>
          </div>
          <input 
            className="bg-[#ccd6f6] p-2 rounded-md" 
            type="text" 
            placeholder="Nom" 
            name="name" 
          />
          <input 
            className="my-4 p-2 bg-[#ccd6f6] rounded-md" 
            type="email" 
            placeholder="Email" 
            name="email" 
          />
          <textarea 
            className="bg-[#ccd6f6] p-2 rounded-md" 
            name="message" 
            rows="10" 
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] px-4 py-3 my-8 mx-auto flex items-center">
            Envoyer
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
