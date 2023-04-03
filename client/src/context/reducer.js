import { GET_PRODUCTS } from "./actions";

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS) {
    return { ...state, products: action.payload.products };
  }
  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
