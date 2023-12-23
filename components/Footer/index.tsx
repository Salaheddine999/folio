import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  //const year = new Date().getFullYear();

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <footer className="footer">
      <h6>Salah eddine</h6>

      <div>
        <a href="https://github.com/Salaheddine999" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/salah-eddine-abdelwahid-b340b3176/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/salaheddine_ab" target="_blank" rel="noopener noreferrer">
          X (Twitter)
        </a>
      </div>

      <a onClick={topFunction} className='top'>
        BACK TO TOP
      </a>
    </footer>
  );
}
