import {useEffect, useState} from 'react';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import ContactMe from './components/ContactMe';
import flipped_image from './assets/images/flipped-image.png';
import pear from './assets/svgs/pear.svg';
import github from './assets/svgs/github.svg';
import facebook from './assets/svgs/facebook.svg';
import phone from './assets/svgs/phone.svg';
import whatsapp from './assets/svgs/whatsapp.svg';
import twitter from './assets/svgs/twitter.svg';
import Header from './components/Header';
import arrow_up from './assets/svgs/arrowup.svg';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const socialIcons = [github, facebook, phone, whatsapp, twitter];
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    setScrolled(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className='w-screen min-w-[320px] max-w-[1700px] text-white mx-auto'>
      <button
        className={
          (scrolled ? 'flex' : 'hidden') +
          ' fixed z-30 w-12 aspect-square bottom-5 right-5 bg-[#9F40FE] items-center justify-center rounded-full'
        }
        onClick={e => {
          e.stopPropagation();
          scrollToTop();
        }}
      >
        <img src={arrow_up} alt='go to top' className='w-4/5' />
      </button>
      <Header />
      <main className='pt-16 sm:pt-0'>
        <Hero />
        <AboutMe />
        <ContactMe />
      </main>
      <hr className='mb-3' />
      <footer className='flex flex-wrap px-4 flex-col sm:flex-row gap-3 justify-center items-start sm:items-center'>
        <img
          src={flipped_image}
          alt='icon'
          className='w-[15%] hidden sm:block rotate-180'
        />
        <div>
          <img src={pear} alt='icon' width={40} />
          <h4 className='text-[#9F40FE] text-2xl font-semibold mb-3'>
            My handles
          </h4>
          <p className='mb-3'>
            Feel free to reach me on any of the following handles
          </p>
          <div className='w-2/5 mb-3 flex gap-8'>
            {socialIcons.map((svg, i) => (
              <img src={svg} alt='' key={i} className='w-1/5' />
            ))}
          </div>
        </div>
        <p className='w-full text-sm sm:text-base text-center text-[#FFFFFF66] mb-3'>
          Copywright &copy; {new Date().getFullYear()} | Designed & Developed by
          Michael Olofin
        </p>
      </footer>
    </div>
  );
}

export default App;
