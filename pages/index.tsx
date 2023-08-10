import type { NextPage } from 'next';
import HomeCover from '../components/HomeCover';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';
import AnimatedParagraph from '../components/AnimatedParagraph';
import CustomCursor from '../components/CustomCursor';
import AnimatedProjects from "../components/AnimatedProjects"
import AnimatedExperience from '../components/Experience/AnimatedExperience';
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Salah eddine &ndash; Frontend Developer </title>
        <meta property="og:title" content="Salah eddine - Frontend Developer" key="Portfolio" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <CustomCursor />
        <div className="home-container">
          <div className="home-hero">
            <HomeCover />
            <ScrollIndicator />
          </div>
          
          <section className="section" id='about'>
                <h1 className="section-part-1">01 / ABOUT</h1>
                <div className="section-part-2">
                  <AnimatedParagraph/>
                </div>
          </section>
          <section className="section about-text" id='projects'>
            <h1 className="section-part-1">02 / SELECTED<br/>PROJECTS <sup>(3)</sup></h1>
            <div className="section-part-2">
                  <AnimatedProjects/>
                  {/* <Projects/> */}
                </div>

            <div className="section-part-2">
            </div>
          </section>

          <section className="section" id='skills'>
                <h1 className="section-part-1">03 / SKILLS</h1>
                <div className="section-part-2">
                  <Skills/>
                </div>
          </section>
          <div id='contact'>
            <Contact />
          </div>
          <Footer />
        </div>
    </>
  );
};

export default Home;
