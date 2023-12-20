import React ,{useState, useEffect}from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';


const variants: Variants = {
  initial: {
    y: -100,
    opacity: 0
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.6 }
  }
};

const mobileMenuVariants: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(()=>{
    //disable scroll when menu open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

  },[isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () =>{
    setMobileMenuOpen(false)
  }

  return (
    <div className='parent'>

      <div className='infos'>
        <motion.div variants={variants} initial="initial" animate="animate">
          <div className='infocontainer'>   
              <div className="blob"></div>
              <p className='infotext'>Available for new opportunities</p>     
          </div>
        </motion.div>
      </div>
    {/* Burger Menu Button */}
    <div className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? 'visible' : 'hidden'}
      >
        <h3 className='mobile_name'></h3>
        <ul>
          <li>
            <Link href="#about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link href="#projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link href="#skills" onClick={closeMenu}>Skills</Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </motion.div>

      <ul className="nav-bar">  
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#contact">Contact</Link>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#skills">Skills</Link>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#projects">Projects<sup>(3)</sup></Link>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#about">About</Link>
        </motion.li>
      </ul>
    </div>
  );
}
