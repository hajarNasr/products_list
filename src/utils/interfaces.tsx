export interface IProduct {
  title: string;
  gtin: string;
  gender: string;
  sale_price: string;
  price: string;
  image_link: string;
  additional_image_link: string;
}

export interface IState {
  products: IProduct[];
  loading: boolean;
  autoList?: string[];
  displayAutoList: boolean;
}
export interface IAction {
  type: string;
  products: IProduct[];
  loading: boolean;
  autoList?: string[];
}
