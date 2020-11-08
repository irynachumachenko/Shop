import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleCheckoutRedirect = () => {
    dispatch(toggleCart());
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
            ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
            : <div className="empty-message">Your cart is empty</div>
        }
      </div>
      <CustomButton onClick={() => handleCheckoutRedirect()}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
