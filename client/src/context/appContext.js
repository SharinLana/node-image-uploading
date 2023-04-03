import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";
import { GET_PRODUCTS, GET_INPUT_VALUE } from "./actions";

const initialState = {
  products: [],
  title: "",
  price: "",
  image: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1/products",
  });

  const getAllProducts = async () => {
    try {
      const response = await authFetch("/");
      const { products } = response.data;

      dispatch({
        type: GET_PRODUCTS,
        payload: { products },
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getValue = ({ name, value }) => {
    dispatch({ type: GET_INPUT_VALUE, payload: { name, value } });
  };

  return (
    <AppContext.Provider value={{ ...state, getAllProducts, getValue }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
