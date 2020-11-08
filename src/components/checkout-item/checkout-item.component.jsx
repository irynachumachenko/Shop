import React from 'react';
import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart, deleteCartItem, removeCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item }) => {
  const {
    imageUrl,
    name,
    price,
    quantity,
  } = item;

  const dispatch = useDispatch();

  const clearItem = (cartItem) => dispatch(deleteCartItem(cartItem.id));
  const addItem = (cartItem) => dispatch(addItemToCart(cartItem));
  const removeItem = (cartItem) => dispatch(removeCartItem(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <button
          className="btn-default arrow"
          onClick={() => removeItem(item)}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button
          className="btn-default arrow"
          onClick={() => addItem(item)}
        >
          &#10095;
        </button>
      </div>
      <div className="price">{price}</div>
      <button
        className="btn-default remove-button"
        onClick={() => clearItem(item)}
      >
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
