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
              strokeWidth={4}
            >
            Salah eddine,
            </RoughNotation>
           &nbsp;your friendly neighborhood frontend developer! Passionate about open source and tech that makes a positive impact on people&apos;s lives. I&apos;m all about creating stunning, user-friendly web interfaces by constantly exploring new tools and techniques. When I&apos;m not coding, you&apos;ll find me out with friends, diving into expert blogs, or just chillin&apos;.</p>
      {/* <Resume/> */}
    </>
  );
}
