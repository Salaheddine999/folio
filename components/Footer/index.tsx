import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
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
          Twitter
        </a>
      </div>

      <h6>Portfolio ({year})</h6>
    </footer>
  );
}
