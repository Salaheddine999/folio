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
            Hello! My name is&nbsp;
            <RoughNotation
              type="highlight"
              color="#D7FE52"
              multiline
              show
              animationDelay={3500}
              padding={[ 2, 14, 2, 14 ]}
              strokeWidth={4}
            >
            Salah eddine
            </RoughNotation>
          , and I&apos;m a frontend developer passionate about open source and technology that has a positive impact on people&apos;s lives. I enjoy creating beautiful and user-friendly web interfaces by constantly exploring and experimenting with new tools and techniques. In my spare time, I go out with friends or read blogs and articles from experts to stay up-to-date with the latest trends in the industry.
      </p>
      {/* <Resume/> */}
    </>
  );
}
