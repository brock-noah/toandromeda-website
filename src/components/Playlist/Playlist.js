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
    <article className="Playlist flex-row">
      <section className='flex-row'>
        <h6 className="Playlist_version">{v}</h6>
        <div>
          <h3 className="Playlist_name">{title}</h3>
          <p>{description}</p>
        </div>
      </section>
      <div style={{marginLeft: '32px'}}>
        <iframe className="Playlist_iframe" src={'localhost:9000'} frameBorder="0" allowTransparency="true"></iframe>
        <OpenWith {...follow} />
      </div>
    </article>
  );
}

export default Playlist;
