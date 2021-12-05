import * as actionType from '../actions/type';

const initialState = {
  storeId: {},
  menu: [],
  cart: [],
  isLoading: false,
  isError: false,
};

const storeid = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.STORE_ID_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.STORE_ID_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storeId: payload.store,
        menu: payload.store.menus,
        isError: false,
        cart: [],
      };
    case actionType.STORE_ID_LOAD_FAILED:
      return {
        ...state,
        isLoading: false,
        storeId: {},
        menus: [],
        cart: [],
        isError: true,
      };
    case actionType.STORE_ID_ADD_CART: {
      const newItem = payload;
      const containItem = state.cart.some(
        (cart) => cart.item.id === newItem.id,
      );
      let newCart;
      if (containItem) {
        newCart = state.cart.map((cartItem) => {
          let cartItemAmount = cartItem.amount;
          if (cartItem.item.id === newItem.id) {
            cartItemAmount += 1;
          }
          return {
            ...cartItem,
            amount: cartItemAmount,
          };
        });
      } else {
        newCart = [...state.cart, { amount: 1, item: newItem }];
      }

      return {
        ...state,
        cart: newCart,
      };
    }
    case actionType.STORE_ID_REMOVE_CART: {
      const newItem = payload;
      const reduceCart = state.cart.map((cartItem) => {
        let cartItemAmount = cartItem.amount;
        if (cartItem.item.id === newItem.id) {
          cartItemAmount -= 1;
        }
        return {
          ...cartItem,
          amount: cartItemAmount,
        };
      });
      const newCart = reduceCart.filter(
        (cardItem) => cardItem.amount > 0,
      );
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return { ...state };
  }
};

export default storeid;
