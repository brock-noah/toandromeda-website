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
  active,
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

  const className = ['Playlist', active && 'List_item--active'].filter(Boolean).join(' ')

  return (
    <article className={className}>
      <section style={{display: 'none'}}>
        <h4 className="Playlist_version">{v}</h4>
        <h3 className="Playlist_name">{title}</h3>
        <p>{description}</p>
      </section>
      <OpenWith {...follow} />
      <iframe className="Playlist_iframe" src={iframe} frameBorder="0" allowTransparency="true"></iframe>
    </article>
  );
}

export default Playlist;
