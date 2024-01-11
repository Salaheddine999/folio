import React, { useRef } from 'react';
import { useSplitText } from '../../hooks/useSplitText';
import { RoughNotation } from "react-rough-notation";
import Resume from '../Resume';

export default function AnimatedParagraph() {
  const ref = useRef<HTMLDivElement>(null);
  useSplitText(ref, 'lines');

  return (
    <>
      <p ref={ref} id="headline" className='full-paragraph roadmap-title'>
            Hey there!👋&nbsp;I&apos;m&nbsp;
            <RoughNotation
              type="highlight"
              color="#D7FE52"
              multiline
              show
              animationDelay={3800}
              padding={[ 2, 14, 2, 14 ]}
              strokeWidth={2}
            >
            Salah eddine,
            </RoughNotation>
           &nbsp;your friendly neighborhood frontend developer with a sprinkle of caffeine and a dash of open-source passion. I&apos;m all about creating user-friendly web interfaces that are not only stunning but also leave a positive mark on the world.
          When the keyboard goes silent, you&apos;ll find me out with friends, diving into the wisdom of expert blogs (and maybe a guilty pleasure meme or two 😄), or just chilling with a good book and a steaming cup of Moroccan mint tea.</p>
      {/* <Resume/> */}
    </>
  );
}
