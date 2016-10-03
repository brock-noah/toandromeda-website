import React, { PropTypes } from 'react';
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
      <iframe src={iframe} width="300" height="380" frameborder="0" allowTransparency="true"></iframe>
      <div>
        Open with:
        <a href={follow.desktop}>desktop app</a> <a href={follow.web}>web player</a>
      </div>
    </article>
  );
}

export default Playlist;
