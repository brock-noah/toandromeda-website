import React from 'react';
import './Follow.css';

function Follow(props) {
  return (
    <div className="follow">
      <a href="http://www.facebook.com/ToAndromedaAndBack" target="_blank">
        <i className="fa fa-fw fa-2x fa-facebook"></i>
      </a>
      <a href="http://twitter.com/kcsbtaab" target="_blank">
        <i className="fa fa-fw fa-2x fa-twitter"></i>
      </a>
    </div>
  );
}

export default Follow;