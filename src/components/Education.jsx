import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className='pb-4 border-t border-stone-900'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'>
        EDUCATION
      </motion.h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className='mb-8 flex flex-shrink lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }} 
              className='w-full lg:w-1/4'>
              <p className='mb-2 text-lg text-stone-400'>
                {education.year}
              </p>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'>
              <h3 className='font-semibold'>
                {education.std} - {education.marks}
              </h3>
             
              <p className='text-lg text-stone-500'>{education.institute}</p>
              <p className='mb-4 text-stone-400'>
                {education.place}
              </p>
            </motion.div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
