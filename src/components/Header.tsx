import {useReducer, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './hamburger.css';

const Header = () => {
  const nav = [
    'Home',
    'About me',
    'My goal',
    'My skillsets',
    'My values',
    'Contact me'
  ];
  const [navOpen, toggleNavOpen] = useReducer(state => !state, false);
  useEffect(() => {
    //Lock scroll
    //Add click away listener to close the navbar
  }, []);
  return (
    <header className='md:py-3 w-full fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-black'>
      {/* Desktop nav  */}
      <nav className='w-max hidden md:flex gap-4 mx-auto'>
        {nav.map(nav => (
          <a href='#' key={nav}>
            {nav}
          </a>
        ))}
      </nav>

      {/* Navigation button  */}
      <button
        className={'flex md:hidden hamburger ' + (navOpen ? 'open' : '')}
        onClick={toggleNavOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile nav  */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            className='bg-purple-600 p-5 flex flex-col gap-3 overflow-hidden'
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0}}
            onClick={toggleNavOpen}
          >
            {nav.map((_, i) => (
              <motion.li key={i}>
                <a href='#'>{_}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
