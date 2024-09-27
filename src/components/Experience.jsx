import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='pb-4 border-t border-stone-900'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        Experience
      </motion.h2>
      
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-col md:flex-row lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }} 
              className='w-full md:w-1/4 lg:text-left pr-6'>
              <p className='mb-4 text-sm text-stone-400'> {/* Space between year and content */}
                {experience.year}
              </p>
            </motion.div>
            
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl md:w-3/4'>
              <h3 className='mb-2 font-semibold'>
                {experience.role} -{" "}
                <span className='text-sm text-stone-500'>{experience.company}</span>
              </h3>
              <ul className='list-disc ml-4'>
                <li className='mb-4 text-stone-400'>{experience.description}</li>
                <li className='mb-4 text-stone-400'>{experience.point2}</li>
              </ul>
              {experience.technologies.map((tech, index) => (
                <span className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300' key={index}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
