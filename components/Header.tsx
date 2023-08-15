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
export default function Header() {


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
