import { IAction, IState } from "../utils/interfaces";
import updateState from "../utils/updateState";
import { GET_PRODUCTS, HIDE_AUTO_LIST, SEARCH_PRODUCTS } from "./types";

const INIT_STATE: IState = {
  products: [],
  loading: true,
  autoList: [],
  displayAutoList: false,
};

const getProducts = (state: IState, action: IAction) => {
  return updateState(state, {
    products: action.products,
    loading: false,
  });
};

const searchProducts = (state: IState, action: IAction) => {
  return updateState(state, {
    products: action.products,
    displayAutoList: true,
    autoList: action.autoList,
    loading: false,
  });
};

const hideAutoList = (state: IState, action: IAction) => {
  return updateState(state, {
    displayAutoList: false,
  });
};

const productsReducer = (state = INIT_STATE, action: IAction) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return getProducts(state, action);
    case SEARCH_PRODUCTS:
      return searchProducts(state, action);
    case HIDE_AUTO_LIST:
      return hideAutoList(state, action);
    default:
      return state;
  }
};

export default productsReducer;
