import { createSelector } from 'reselect';

const getCart = ({ cart }) => cart;

const getCartItems = createSelector(
  [getCart],
  ({ cartItems }) => cartItems
);

export const selectCartItems = createSelector(
  [getCartItems],
  (cartItems) => Object.values(cartItems),
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0),
);

export const selectCartIsOpened = createSelector(
  [getCart],
  (cart) => cart.isOpened,
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0),
);
