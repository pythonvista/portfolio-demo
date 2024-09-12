import {useRef, useEffect} from 'react';
import {carousel} from '../utils';

const TypingText = () => {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const carouselTexts = [
      {text: 'Programmer', color: '#00ff57b3'},
      {text: 'Software Developer', color: '#9F40FE'},
      {text: 'Web Developer', color: '#FF9900'}
    ];
    carousel(carouselTexts, elRef);
  }, []);
  return (
    <>
      {/* <div className='typing-container text-white'>
        <span id='sentence' className='sentence'>
          I'm a
        </span>
        <span id='feature-text' ref={elRef}></span>
        <span className='input-cursor'></span>
      </div> */}
      <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold my-4 sm:mb-8'>
        Hi, I'm <strong className='text-[#85765F]'>Victor</strong> <br />
        <div className='typing-container text-white'>
          <span id='sentence' className='sentence'>
            I'm a
          </span>
          <span id='feature-text' ref={elRef}></span>
          <span className='input-cursor'></span>
        </div>
        Let's connect and work <br /> together
      </h2>
    </>
  );
};

export default TypingText;
