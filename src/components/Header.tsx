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
    <motion.header
      className={
        'md:py-3 w-full fixed top-0 left-1/2 -translate-x-1/2 z-10 bg-gray-800 ' +
        (navOpen ? 'rounded-b-2xl' : '')
      }
      variants={{
        open: {backgroundColor: 'rgb(147 51 234)'},
        closed: {backgroundColor: 'rgb(31 41 55)'}
      }}
      animate={navOpen ? 'open' : 'closed'}
    >
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
        {Array.from({length: 3}).map((_, i) => (
          <span key={i}></span>
        ))}
      </button>

      {/* Mobile nav  */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            className='bg-purple-600 p-5 flex flex-col gap-3 overflow-hidden rounded-b-2xl'
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
    </motion.header>
  );
};

export default Header;
