import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <header className="container centered">
      <h1>To Andromeda and Back</h1>
      <p>
        Broadcasting live Monday 8PM on 91.9 FM in Santa Barbara or world wide at <a href="http://www.kcsb.org/webcast" target="_blank">KCSB.ORG</a>
      </p>
      <p>Missed the show? <a href="http://www.radiofreeamerica.com/dj/b-no-" target="_blank">Stream the last two shows</a>.</p>
    </header>
  );
}

export default Header;
