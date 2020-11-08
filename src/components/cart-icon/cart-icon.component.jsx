import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';

const CartIcon = ({ onToggle }) => {
  const cartItemsLength = useSelector(selectCartItemsQuantity);

  return (
    <div
      tabIndex="0"
      onClick={onToggle}
      className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{ cartItemsLength }</span>
    </div>
  )
};

export default CartIcon;
