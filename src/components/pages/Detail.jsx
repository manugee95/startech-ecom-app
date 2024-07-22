import { useParams } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Detail() {
    const param = useParams()
    const shoeid = param.id 
    const {product, addToCart} = useContext(EcomContext)
    const shoeitem = product.find((item)=> item._id === shoeid)

  return (
    <div className="flex px-[5%] py-[3%] justify-between">
      <div>
        <img src={"http://localhost:8000/" + shoeitem?.img} alt="" className="h-[400px] w-[500px] object-cover" />
      </div>
      <div className="w-[50%]">
        <h2 className="text-2xl font-bold mb-[10px] border-b-2">{shoeitem?.name}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad saepe
          ducimus repellendus. Libero provident accusantium quod exercitationem
          non. Fugiat, libero!
        </p>
        <p className="py-3 text-xl font-bold">₦{shoeitem?.price}</p>
        <p className="mb-[10px]">
          Category: <span className="text-blue-950 italic font-bold">{shoeitem?.category.name}</span>
        </p>
        <button onClick={()=> addToCart({...shoeitem, quantity: 1})} className="bg-blue-950 text-white rounded p-[10px]">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Detail;
