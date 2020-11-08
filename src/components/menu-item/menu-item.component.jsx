import React from 'react';
import { useHistory } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ imageUrl, title, size, linkUrl }) => {
  const history = useHistory();

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={() => history.push(`/shop/${linkUrl}`)}
      className={`menu-item ${size || ''}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <span className="title">{ title.toUpperCase() }</span>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
