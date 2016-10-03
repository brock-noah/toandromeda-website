import React from 'react';
import './Header.css';

const KCSB = 'http://www.kcsb-radio.dreamhosters.com/';
const RFA = 'http://www.radiofreeamerica.com/dj/b-no-';

function Header(props) {
  return (
    <header className="Header">
      <h1>To Andromeda and Back</h1>
      <p>
        Broadcasting live Monday 8PM on 91.9 FM in Santa Barbara or world wide at <a href={KCSB} target="_blank">KCSB.ORG</a>
      </p>
      <p>Missed the show? <a href={RFA} target="_blank">Stream the last two shows</a>.</p>
    </header>
  );
}

export default Header;
