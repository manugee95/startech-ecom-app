import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import ProductItem from "../ProductItem";

function Products() {
  const { product } = useContext(EcomContext);

  return (
    <div className="mx-[5%]">
      <h1 className="py-[10px] text-xl font-bold">All Products</h1>
      <div className="grid grid-cols-4">
        {product.map((item) => (
          <ProductItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
