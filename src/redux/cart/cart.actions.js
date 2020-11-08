export const addItemToCart = (cartItem) => ({
  type: 'ADD_ITEM_TO_CART',
  payload: cartItem,
});

export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});

export const deleteCartItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: id,
})

export const removeCartItem = (item) => ({
  type: 'REMOVE_CART_ITEM',
  payload: item,
});
