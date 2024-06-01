import {motion} from 'framer-motion';
import Me from '../assets/images/hero-img.png';
import Vector from '../assets/svgs/orange-star.svg';
import TypingText from './TypingText';
import {memo} from 'react';

const item = {
  hidden: {y: 40, opacity: 0},
  visible: {
    y: 0,
    opacity: 1
  }
};

// eslint-disable-next-line
export default memo(() => {
  const animatedText = 'Transforming ideas into powerful software solutions';
  return (
    <>
      <motion.div
        className='w-[95%] sm:w-3/5 relative'
        variants={item}
        transition={{duration: 0.5}}
        animate='visible'
        initial='hidden'
      >
        <img
          src={Vector}
          alt='icon'
          className='hidden sm:block w-5 z-10 absolute -top-6 left-1/2'
        />
        {/* Moving text  */}
        <TypingText />
        <p className='max-w-[650px] mb-5'>
          Crafting digital experiences that leave a lasting impression. Explore
          my web development portfolio and witness the power of innovation and
          creativity.
        </p>
        <a
          className='contact p-2 rounded-[50px] flex items-center gap-2 w-max'
          href='#contact-me'
        >
          <div className='w-12 h-10 rounded-full bg-[#FF9900]' />
          <div className='text-left text-sm pr-1'>
            <p className='font-semibold'>Email me</p>
            <p>damzymike@gmail.com</p>
          </div>
        </a>
      </motion.div>
      {/* Change pic to me popping out the box  */}
      <motion.img
        src={Me}
        alt='Michael'
        className='w-2/5 min-w-[350px] max-w-550px'
        variants={item}
        transition={{duration: 1}}
        animate='visible'
        initial='hidden'
      />

      <aside className='absolute -bottom-5 max-h-14 w-screen'>
        <div className='marquee-section'>
          <div className='marquee-div'>
            <div className='marquee'>
              <p className='uppercase text-5xl tracking-[-0.11em] font-bold text-[#FFFFFF1A] inline'>
                {animatedText.repeat(4)}
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
});
