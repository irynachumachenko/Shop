const INITIAL_STATE = {
  cartItems: {},
  isOpened: false,
};

const clearCartItem = (cartItems, deletingCartItemId) => {
  const cartItemsCopy = { ...cartItems };

  delete cartItemsCopy[deletingCartItemId];

  return cartItemsCopy;
};

const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems[item.id];

  return {
    ...cartItems,
    [item.id]: {
      ...item,
      quantity: existingCartItem ? existingCartItem.quantity + 1 : 1,
    },
  };
};

const removeItemFromCart = (cartItems, item) => {
  const existingCartItem = cartItems[item.id];

  if (existingCartItem.quantity === 1) {
    return clearCartItem(cartItems, existingCartItem.id)
  }

  return {
    ...cartItems,
    [existingCartItem.id]: {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1,
    },
  };
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpened: !state.isOpened,
      };

    case 'DELETE_ITEM':
      return {
        ...state,
        cartItems: clearCartItem(state.cartItems, action.payload),
      }

    default:
      return state;
  }
};

export default cartReducer;
