import { Dispatch } from "redux";
import Papa from "papaparse";
import { IProduct } from "../utils/interfaces";
import { GET_PRODUCTS, HIDE_AUTO_LIST, SEARCH_PRODUCTS } from "./types";

const getProductsAction = (products: IProduct[]) => ({
  type: GET_PRODUCTS,
  products,
});

const parseCSVFunc = (completeFunc: any) => {
  return Papa.parse("./data/products.csv", {
    download: true,
    header: true,
    complete: completeFunc,
  });
};

export const getProducts = () => {
  return (dispatch: Dispatch) => {
    parseCSVFunc(({ data }: { data: IProduct[] }) => {
      dispatch(getProductsAction(data));
    });
  };
};

const searchProductsAction = (products: IProduct[], autoList: string[]) => ({
  type: SEARCH_PRODUCTS,
  products,
  autoList,
});

export const searchProducts = (searchTerm: string) => {
  return (dispatch: Dispatch) => {
    parseCSVFunc(({ data }: { data: IProduct[] }) => {
      let autoList: string[] = [""];
      data = data.filter((item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      autoList = Array.from(new Set(data.map((product) => product.title)));
      dispatch(searchProductsAction(data, autoList));
    });
  };
};

export const hideAutoList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: HIDE_AUTO_LIST });
  };
};
