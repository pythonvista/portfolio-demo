import {useReducer, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './hamburger.css';

const variants = (delay = 0.5) => ({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
      delay
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
      delay
    }
  }
});

const Header = () => {
  const nav = [
    'Home',
    'About me',
    'My goal',
    'My skillsets',
    'My values',
    'Contact me'
  ];
  const [navOpen, toggleNavOpen] = useReducer(
    (state: boolean, close: string) => (close ? false : !state),
    false
  );
  useEffect(() => {
    //Add click away listener to close the navbar
    function closeDropdown() {
      toggleNavOpen('close');
      document.removeEventListener('click', closeDropdown);
    }
    if (navOpen) document.addEventListener('click', closeDropdown);
  }, [navOpen]);
  return (
    <motion.header
      className={
        'md:py-3 w-full fixed top-0 left-1/2 -translate-x-1/2 z-20 bg-gray-800 ' +
        (navOpen ? 'rounded-b-2xl' : '')
      }
      variants={{
        open: {backgroundColor: 'rgb(147 51 234)'},
        closed: {backgroundColor: 'rgb(31 41 55)'}
      }}
      animate={navOpen ? 'open' : 'closed'}
      onClick={e => e.stopPropagation()}
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
        onClick={() => toggleNavOpen('default')}
      >
        {Array.from({length: 3}).map((_, i) => (
          <span key={i}></span>
        ))}
      </button>

      {/* Mobile nav  */}
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            className='bg-purple-600 p-5 pt-0 flex flex-col gap-3 overflow-hidden rounded-b-2xl'
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            exit={{height: 0, opacity: 0, transition: {delay: 0.6}}}
            onClick={() => toggleNavOpen('default')}
          >
            {nav.map((_, i) => (
              <motion.li
                key={i}
                initial={variants().closed}
                animate={variants(i * 0.2).open}
                exit={variants(1 / (i + 1)).closed}
              >
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
