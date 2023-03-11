import React, { useRef } from 'react';
import { useSplitText } from '../../hooks/useSplitText';

export default function AnimatedExperience() {
  const ref = useRef<HTMLDivElement>(null);
  useSplitText(ref, 'lines');

  return (
    <div ref={ref}>
            <div className='experience'>
                <p className='company_name'>Eddy Tech</p>
                <div className='role_time'>
                    <p className='role'>Full-Stack Developer</p>
                    <p className='role_time'>Jan 2020 — Now</p>
                </div>
            </div>
            <div className='experience'>
                <p className='company_name'>Engagia Agency</p>
                <div className='role_time'>
                    <p className='role'>Full-Stack Developer</p>
                    <p className='time'>Mar 2019 — Dec 2019</p>
                </div>
            </div>
            <div className='experience'>
                <p className='company_name'>Eureka Creation</p>
                <div className='role_time'>
                    <p className='role'>Web Developer Intern</p>
                    <p className='role_time'>Jun 2018 — Jan 2019</p>
                </div>
            </div>
    </div>
  );
}
