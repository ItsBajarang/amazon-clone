export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

export default (state = initialState, { type, payload }) => {
  console.log("printing type and payload",{ type, payload });
  switch (type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, payload] };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === payload);

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product with ID ${payload} because its not in basket`
        );
      }

      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
