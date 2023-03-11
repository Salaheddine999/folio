import Image from 'next/image'
import styles from './Projects.module.scss'
import noteed from '../../public/images/noteed.png'
import folio from '../../public/images/folio.png'
import marketplace from '../../public/images/marketplace.png'
import React, { useRef, useState } from 'react';
import { useSplitText } from '../../hooks/useSplitText';

export default function AnimatedProjects() {
    const ref = useRef<HTMLDivElement>(null);
    useSplitText(ref, 'lines');

    // const [isHovering, setIsHovering] = useState(false);

    // function handleMouseOver() {
    //   setIsHovering(true);
    // }

    // function handleMouseOut() {
    //   setIsHovering(false);
    // }

  return (
        <div ref={ref} id="headline">
          <div  className={styles.project}>
            <div className={styles.title}>
              <p>NOTEED</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>Note-taking app. Can be used to write and manage anything you'd like, with the ability to access your notes from different devices.</p>
              <span>TECH STACK:</span>
              <p className={styles.para2}><br/>React, React Router, React Query, Tailwind CSS, Auth0, Xano.</p>
            </div>

            {/* {isHovering && (
              <div className={styles.image} >
                <Image src={noteed} alt="" height={120} width={250}/>
              </div>
            )} */}

            <a className={styles.cta} href="https://github.com/Salaheddine999/Noteed" target="_blank">
              <span className={styles.hover_underline_animation}>VIEW PROJECT</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </a>
          </div>
          <div  className={styles.project}>
            <div className={styles.title}>
              <p>H-M</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>H-M is a marketplace to find and list houses for sale or rent.</p>
              <span>TECH STACK:</span>
              <p className={styles.para2}><br/>React, React Router, Firebase, Leaflet.</p>
            </div>
             {/* <div className={styles.image}>
              <Image src={marketplace} alt=""/>
            </div>  */}
            <a className={styles.cta} href="https://github.com/Salaheddine999/House-Marketpalce" target="_blank">
              <span className={styles.hover_underline_animation}>VIEW PROJECT</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </a>
          </div>
          <div  className={styles.project}>
            <div className={styles.title}>
              <p>FOLIO</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>My 2023 personal portfolio. I built it to showcase my work and skills.</p>
              <span>TECH STACK:</span>
              <p className={styles.para2}><br/>Next, TypeScript, SCSS, GSAP, Framer-Motion.</p>
            </div>
             {/* <div className={styles.image}>
              <Image src={folio} alt=""/>
            </div>  */}
            <a className={styles.cta} href="https://github.com/Salaheddine999/folio" target="_blank">
              <span className={styles.hover_underline_animation}>VIEW PROJECT</span>
              <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
              </svg>
            </a>
          </div>

          <div className={styles.more}>
            <a href='https://github.com/Salaheddine999' target="_blank">More Projects</a>
          </div>
        </div>
  )
  
}
