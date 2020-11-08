import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';
import { selectCartItems, selectCartTotalAmount } from '../../redux/cart/cart.selectors';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  console.log('rerender!');

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}

      <div className="total">
        Total: $
        { totalAmount }
      </div>
    </section>
  );
};

export default CheckoutPage;
