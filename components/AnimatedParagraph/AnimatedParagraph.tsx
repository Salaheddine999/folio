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
            Hey there!👋&nbsp;I'm&nbsp;
            <RoughNotation
              type="highlight"
              color="#D7FE52"
              multiline
              show
              animationDelay={4000}
              padding={[ 2, 14, 2, 14 ]}
              strokeWidth={4}
            >
            Salah eddine
            </RoughNotation>
           ,&nbsp;your friendly neighborhood frontend developer! Passionate about open source and tech that makes a positive impact on people's lives. I'm all about creating stunning, user-friendly web interfaces by constantly exploring new tools and techniques. When I'm not coding, you'll find me out with friends, diving into expert blogs, or just chillin'.</p>
      {/* <Resume/> */}
    </>
  );
}
