import { listTableHeaders, PAGE_SIZE } from "../../utils/constants";
import { IProduct } from "../../utils/interfaces";
import ProductItem from "../product_item";
import "./styles.scss";

type ListItemProps = {
  products: IProduct[];
  currentPage: number;
};

const ListTable = ({ products, currentPage }: ListItemProps) => {
  return (
    <table>
      <thead>
        <tr>
          {listTableHeaders.map((td: string) => (
            <th key={td}>{td}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products
          .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
          .map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
      </tbody>
    </table>
  );
};

export default ListTable;
