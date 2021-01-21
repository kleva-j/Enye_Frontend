import React, { createContext, useReducer, useEffect } from "react";
import useFetch from "use-http";

import { Modal } from "../components/modal";
import { useModal } from "../hooks";

const initialState = {
  error: false,
  loading: true,
  data: {
    size: 0,
    result: [],
  },
};

export const AppContext = createContext(initialState);

const { Provider } = AppContext;

export const ACTIONS = {
  SET_FETCH_RESULT: "SET_FETCH_RESULT",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_FETCH_RESULT: {
      return { ...state, ...action.payload };
    }
    case ACTIONS.SET_LOADING: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const AppProvider = ({ children }) => {
  const { get, response } = useFetch(
    "https://api.enye.tech/v1/challenge/records"
  );
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { modalContent, modalIsVisible, handleContent } = useModal();

  const loadInitialData = async () => {
    const result = await get();
    if (response.ok) {
      const {
        records: { profiles },
        size,
      } = result;

      dispatch({
        type: ACTIONS.SET_FETCH_RESULT,
        payload: {
          data: {
            result: profiles,
            size,
          },
          loading: false,
        },
      });
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <Provider
      value={{ state, dispatch, modalContent, modalIsVisible, handleContent }}
    >
      <Modal />
      {children}
    </Provider>
  );
};
