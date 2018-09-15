import React from 'react';
import PropTypes from 'react-proptypes';
import OpenWith from './OpenWith';
import './Playlist.css';

Playlist.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  uri: PropTypes.string,
  user: PropTypes.string
};

function Playlist({
  v,
  uri,
  title,
  description,
  user,
}) {
  const iframe = 
    'https://embed.spotify.com/?uri=spotify%3Auser%3A'+ user +'%3Aplaylist%3A'+ uri;

  const follow = {
    desktop: 'spotify:user:'+ user +':playlist:'+ uri,
    web: 'https://open.spotify.com/user/'+ user +'/playlist/'+ uri
  };

  return (
    <article className="Playlist">
      <h6 className="Playlist_name">{v}</h6>
      <h3 className="Playlist_name">{title}</h3>
      <p>{description}</p>
      <iframe className="Playlist_iframe" src={iframe} frameBorder="0" allowTransparency="true"></iframe>
      <OpenWith {...follow} />
    </article>
  );
}

export default Playlist;
