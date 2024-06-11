import {memo} from 'react';
import rounded from '../assets/svgs/round.svg';
import HeadingStar from './HeadingStar';
import {motion} from 'framer-motion';

const variants = {
  initial: {opacity: 0, y: 100},
  animate: {opacity: 1, y: 0}
};

const AboutMe = memo(() => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='eclipse w-[300px] rounded-full aspect-square bg-[#00ff574d] absolute top-[250px] -left-[150px]' />
        <div className='eclipse w-[300px] rounded-full aspect-square bg-[#9F40FECC] absolute -top-[50px] -right-[150px]' />
        <motion.div
          variants={variants}
          initial='initial'
          whileInView='animate'
          viewport={{once: true}}
          className='text-center w-4/5 mx-auto p-4 py-14 rounded-2xl border-4 border-[rgba(255,255,255,0.1)] about-me'
        >
          <HeadingStar heading='About me' />
          <p className='text-sm sm:text-base'>
            I'm a passionate software developer with a keen eye for clean and
            efficient code. Adept at translating complex ideas into practical
            solutions, I thrive on challenges and enjoy staying abreast of the
            latest technologies. Dedicated to continuous learning and
            improvement, I bring a collaborative and innovative approach to
            every project, aiming to create software that not only meets but
            exceeds expectations. Let's build the future together!
          </p>
        </motion.div>
      </div>
      <img src={rounded} alt='icon' className='w-14 ml-auto mb-14' />
    </>
  );
});

export default AboutMe;
