import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ imageUrl, name, price, handleClick }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}/>
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <CustomButton onClick={handleClick}>Add to card</CustomButton>
    </div>
  )
};

export default  CollectionItem;
