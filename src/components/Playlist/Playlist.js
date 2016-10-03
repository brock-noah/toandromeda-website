import React, { PropTypes } from 'react';
import OpenWith from './OpenWith';
import './Playlist.css';

Playlist.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.string
};

function Playlist({
  id,
  name,
  user,
}) {
  const iframe = 
    'https://embed.spotify.com/?uri=spotify%3Auser%3A'+ user +'%3Aplaylist%3A'+ id;

  const follow = {
    desktop: 'spotify:user:'+ user +':playlist:'+ id,
    web: 'https://open.spotify.com/user/'+ user +'/playlist/'+ id
  };

  return (
    <article className="Playlist">
      <h3 className="Playlist_name">{name}</h3>
      <iframe className="Playlist_iframe" src={iframe} frameBorder="0" allowTransparency="true"></iframe>
      <OpenWith {...follow} />
    </article>
  );
}

export default Playlist;
