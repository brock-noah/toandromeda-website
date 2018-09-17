import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <header className="Header">
      <Link to='/'><h1>To Andromeda and Back</h1></Link>
      <p>
        Playlists of mellow haze and obfuscated rays for intergalactic cruise control.
      </p>
      <p>
        <small style={{ color: 'var(--text-gray)'}}>
          No shuffle, play from top to bottom.
        </small>
      </p>
    </header>
  );
}

export default Header;
