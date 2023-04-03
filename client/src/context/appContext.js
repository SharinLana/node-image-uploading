import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";
import { GET_PRODUCTS } from "./actions";

const initialState = {
  products: [],
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
      console.log(error.response.data);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getAllProducts }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
