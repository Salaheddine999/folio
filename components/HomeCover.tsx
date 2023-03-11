import Image from 'next/image';
import React from 'react';
import AnimatedTitle from './AnimatedTitle';

export default function HomeCover() {
  return (
    <div className="home-cover">
      <AnimatedTitle text="Frontend" />
      <AnimatedTitle text="Developer" />
    </div>
  );
}
