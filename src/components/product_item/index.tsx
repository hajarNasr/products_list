import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IProduct } from "../../utils/interfaces";

const ProductItem = ({ product }: { product: IProduct }) => {
  const [toggleColapsed, setToggleCollasped] = useState(true);
  const handleCollabse = () => {
    setToggleCollasped(!toggleColapsed);
  };
  return (
    <>
      <tr onClick={handleCollabse}>
        <td>
          <LazyLoadImg imgLink={product.image_link} />
        </td>
        <td>{product.gender}</td>
        <td>{product.gtin}</td>
        <td>{product.price}</td>
        <td>{product.sale_price}</td>
        <td>{product.title}</td>
      </tr>
      <tr className="extra-imgs-row">
        <td colSpan={6}>
          {!toggleColapsed && (
            <div>
              {product.additional_image_link.split(",").map((link: string) => (
                <LazyLoadImg imgLink={link} key={link} />
              ))}
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

const LazyLoadImg = ({ imgLink }: { imgLink: string }) => (
  <LazyLoadImage src={imgLink} width="100px" effect="blur" />
);
export default ProductItem;
