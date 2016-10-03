import React from 'react';

export default function(props) {
  return (
    <div className="Openwith">
      <span>Open with</span>
      <i className="fa fa-circle-o" />
      <a href={props.desktop}>desktop app</a>
      <i className="fa fa-circle-o" />
      <a href={props.web}>web player</a>
    </div>
  );
}
