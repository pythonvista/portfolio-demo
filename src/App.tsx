import {useEffect, useState} from 'react';
// import {useInView} from 'framer-motion';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import arrow_up from './assets/svgs/arrowup.svg';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  //Todo Create a state that tracks which element in view
  //Todo Pass this state into the Header
  const [scrolled, setScrolled] = useState(false);
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
        <img src={arrow_up} alt='go to top' className='w-3/5' />
      </button>

      <Header />

      <main className='pt-16 sm:pt-0'>
        <section className='hero-sec relative min-h-[100vh] px-3 md:px-10 flex flex-col sm:flex-row items-center justify-center overflow-hidden'>
          <Hero />
        </section>

        <section className='h-screen relative overflow-hidden mb-10'>
          <AboutMe />
        </section>

        <hr />

        <section className='projects min-h-screen relative pt-10 pb-14 overflow-hidden'>
          <Projects />
        </section>

        <hr />

        <section id='services' className='mt-10'>
          <Skills />
        </section>

        <hr />

        <section className='pt-10'>
          <ContactMe />
        </section>
      </main>
      <hr className='mb-3' />

      <Footer />
    </div>
  );
}

export default App;
