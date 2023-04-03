import { initialState } from "./appContext";
import {
  GET_PRODUCTS,
  GET_INPUT_VALUE,
  ADD_PRODUCT,
  ADD_IMAGE,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS) {
    return {
      ...state,
      products: action.payload.products,
      formSubmitted: false,
    };
  }

  if (action.type === GET_INPUT_VALUE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === ADD_IMAGE) {
    return { ...state, image: action.payload.src };
  }

  if (action.type === ADD_PRODUCT) {
    return { ...state, ...initialState, formSubmitted: true };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
