import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import ProductItem from "./ProductItem";

function Featured() {
  const { featured } = useContext(EcomContext);

  return (
    <div className="mx-[5%]">
      <h1 className="py-[10px] text-xl font-bold">Featured Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {featured.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
