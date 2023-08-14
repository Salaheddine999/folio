import Link from 'next/link';
import React, {useState, useEffect} from 'react';


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h6>&copy; salah eddine {year}</h6>

      <div>
        <a href="https://github.com/Salaheddine999" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/salah-eddine-abdelwahid-b340b3176/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/salaheddine_ab" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      <Link href="#top">back to the top</Link>
    </footer>
  );
}
