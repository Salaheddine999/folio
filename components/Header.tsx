import React ,{useState, useEffect}from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useLenis } from "@studio-freight/react-lenis";

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

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    // console.log(scroll);
  });


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
      
      <ul className="nav-bar">
        <div className='sub-nav menu_btn'>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#contact" className='menu_link' onClick={() => lenis.scrollTo("#contact", { lerp: 0.1 })}>Contact</Link>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#skills" className='menu_link' onClick={() => lenis.scrollTo("#skills", { lerp: 0.1 })}>Skills</Link>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#projects" className='menu_link' onClick={() => lenis.scrollTo("#projects", { lerp: 0.1 })}>Projects</Link><sup>&nbsp;3</sup>
        </motion.li>
        <motion.li variants={variants} initial="initial" animate="animate">
          <Link href="#about" className='menu_link' onClick={() => lenis.scrollTo("#about", { lerp: 0.1 })}>About</Link>
        </motion.li>
        </div>
      </ul>


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
            <Link href="#projects" onClick={closeMenu}>Projects<sup>&nbsp;3</sup></Link>
          </li>
          <li>
            <Link href="#skills" onClick={closeMenu}>Skills</Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
        <div className='mobile_menu_bottom'>
          <ul>
            <li>
              <a href="https://github.com/Salaheddine999" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/salaheddine_ab" target="_blank" rel="noopener noreferrer">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/salah-eddine-abdelwahid-b340b3176/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

    </div>
  );
}
