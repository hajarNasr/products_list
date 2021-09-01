import { useEffect, useState } from "react";
import Header from "../header";
import Pagination from "rc-pagination";
import ListTable from "../list_table";
import { PAGE_SIZE } from "../../utils/constants";
import "./pagination_styles.scss";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions";

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { products, loading } = useSelector((state: RootStateOrAny) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <main>
      <Header />
      {loading ? (
        <div>...loading</div>
      ) : products.length ? (
        <>
          <ListTable products={products} currentPage={currentPage} />
          <Pagination
            onChange={onChange}
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={products.length}
          />
        </>
      ) : (
        <div>No records were found.</div>
      )}
    </main>
  );
};

export default ProductsList;
