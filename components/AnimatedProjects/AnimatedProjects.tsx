import styles from './Projects.module.scss'
import React, { useRef } from 'react';
import { useSplitText } from '../../hooks/useSplitText';
import { RoughNotation } from "react-rough-notation";

export default function AnimatedProjects() {
    const ref = useRef<HTMLDivElement>(null);
    useSplitText(ref, 'lines');


  return (
        <div ref={ref} id="headline" className={styles.main}>
          <div  className={styles.project}>
            <div className={styles.title}>
              <p>HouseFinder</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>A marketplace that allows users to list houses for sale/rent. And allows visitors to search for properties and contact the owners. </p>
              <div className={styles.para2}><br/>
                <p>React</p>
                <p>React Router</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
                <p>Leaflet</p>
              </div>
            </div>
            <div className={styles.container}>
              <a className={styles.cta} href="https://github.com/Salaheddine999/HouseFinder" target="_blank">
                <span>Source
                  <svg role="img" height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </span>
              </a>
              <a className={styles.cta2} href="https://house-finder-two.vercel.app/" target="_blank">
                <span>Live
                <svg viewBox="0 0 24 24" width="0.9375em" height="0.9375em" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6" ></path><path d="M10 14L21 3"></path></svg>
                </span>
              </a>
            </div> 
          </div>

          <div  className={styles.project}>
            <div className={styles.title}>
              <p>Noteed</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>Note-taking app. Can be used to write and manage anything you&apos;d like, with the ability to access your notes from different devices.</p>
              <div className={styles.para2}>
                <p>React</p>
                <p>React Router</p>
                <p>React Query</p>
                <p>Tailwind CSS</p>
                <p>Auth0</p>
              </div>
              
            </div>

          <div className={styles.container}>
            <a className={styles.cta} href="https://github.com/Salaheddine999/Noteed" target="_blank">
              <span>Source
                <svg role="img" height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </span>
            </a>
            <a className={styles.cta2} href="https://noteed-lime.vercel.app/" target="_blank">
              <span>Live
              <svg viewBox="0 0 24 24" width="0.9375em" height="0.9375em" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6" ></path><path d="M10 14L21 3"></path></svg>
              </span>
            </a>
          </div>  

          </div>

          <div  className={styles.project}>
            <div className={styles.title}>
              <p>Folio</p>
            </div>
            <div className={styles.description}>
              <p className={styles.para1}>My 2023 personal portfolio. I built it to showcase my work and skills.</p>
              <div className={styles.para2}><br/>
                <p>Next</p>
                <p>TypeScript</p>
                <p>SCSS</p>
                <p>GSAP</p>
                <p>Framer-Motion</p>
              </div>
            </div>

            <div className={styles.container}>
              <a className={styles.cta} href="https://github.com/Salaheddine999/folio" target="_blank">
                <span>Source
                  <svg role="img" height={20} width={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </span>
              </a>
              <a className={styles.cta2} href="https://salah-eddine.vercel.app/" target="_blank">
                <span>Live
                <svg viewBox="0 0 24 24" width="0.9375em" height="0.9375em" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6" ></path><path d="M10 14L21 3"></path></svg>
                </span>
              </a>
            </div> 
          </div>

          <div className={styles.more}>
            <RoughNotation
              type="highlight"
              color="rgba(170, 255, 0, 0.6)"
              show
              animationDelay={5000}
              padding={[ 2, 14, 2, 14 ]}
              strokeWidth={2}
            >
              <a href='https://github.com/Salaheddine999' target="_blank">More Projects</a>
            </RoughNotation>
          </div>
        </div>
  )
  
}
